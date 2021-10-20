import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {Container, Grid, Pagination, Segment} from "semantic-ui-react";

import Discord from "../Discord";
import Live from "../Live";
import {getNewsByPage} from "../requests";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {LadderNews, LiveLadderWidget} from "../Ladder";
import {ROUTES} from "../utils/constants";

import './scss/styles-homepage.scss';
import Footer from "../Footer";


export default () => {
    const history = useHistory();
    const params: any = useParams();
    const dispatch = useDispatch()
    const newsCache = useSelector((state: any) => state.newsPageReducer, shallowEqual);
    const [page, setPage] = useState(params?.p ? params.p : 1);
    const [pages, setPages] = useState(0);
    const [news, setNews] = useState([]);
    const maxElementsOnPage = 3;

    useEffect(() => {
        if (page) {
            if (!newsCache[page]) {
                getNewsByPage(page).then(res => {
                    setNews(res.data)
                    setPages(res.headers.pages)
                    dispatch({
                        type: 'ADD_NEWS', payload:
                            {
                                [page]: res.data,
                                pages: res.headers.pages
                            }
                    });
                });
            } else {
                setNews(newsCache[page])
                setPages(newsCache.pages)
            }
        }
    }, [page]);

    return <div className={'home-page'}>
        <div className={'grid-wrapper'}>
            <Grid columns='equal'>
                <Grid.Column>
                    <Container className={'base-align-right'}>
                        <Discord/>
                        <br/>
                        <LiveLadderWidget/>
                    </Container>
                </Grid.Column>
                <Grid.Column width={7}>
                    <Container className={'base-container'}>
                        {news.map((ns: any, i) => {
                            return <Segment key={i} textAlign='center' className={'base-segment'}>
                                {ns.is_weekly_ladder ? <LadderNews body={ns.body} week_name={ns.week_name}/> : null}
                            </Segment>
                        })}
                        <Container textAlign={"center"} className={'base-pagination'}>
                            <Pagination
                                inverted
                                defaultActivePage={page}
                                totalPages={Math.ceil(pages / maxElementsOnPage)}
                                onPageChange={(e, {activePage}) => {
                                    setPage(Number(activePage));
                                    if (activePage && activePage > 1) {
                                        history.push("/page/" + activePage)
                                    } else {
                                        history.push(ROUTES.root)
                                    }
                                }}
                            />
                        </Container>
                    </Container>
                </Grid.Column>
                <Grid.Column>
                    <Container className={'base'}>
                        <Live server={'nl'} name={'Europe (NL)'} background={'/images/beast_unit_predator.jpg'}/>
                        <br/>
                        <Live server={'us'} name={'USA (Dallas)'} background={'/images/beast_unit_shaman.jpg'}/>
                    </Container>
                </Grid.Column>
            </Grid>
        </div>
        <Footer/>
    </div>
}