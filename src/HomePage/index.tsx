import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {Container, Grid, Pagination, Segment} from "semantic-ui-react";
import parse from 'html-react-parser';

import Discord from "../Discord";
import Live from "../Live";
import {getNewsByPage} from "../requests";

import './scss/styles-homepage.scss';
import {shallowEqual, useDispatch, useSelector} from "react-redux";


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
                    </Container>
                </Grid.Column>
                <Grid.Column width={6}>
                    <Container className={'base'}>
                        {news.map((ns: any, i) => {
                            return <Segment inverted secondary key={i}>
                                {parse(ns.body)}
                            </Segment>
                        })}
                        <Container textAlign={"center"} className={'pagination'}>
                            <Pagination
                                inverted
                                defaultActivePage={page}
                                totalPages={Math.ceil(pages / maxElementsOnPage)}
                                onPageChange={(e, {activePage}) => {
                                    setPage(Number(activePage));
                                    if (activePage && activePage > 1) {
                                        history.push("/page/" + activePage)
                                    } else {
                                        history.push("/")
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
    </div>
}