import React, {useEffect, useState} from 'react'
import {useHistory, useLocation, useParams, useRouteMatch} from 'react-router-dom'
import {Container, Grid, Pagination, Segment} from "semantic-ui-react"

import Discord from "../Discord"
import {LivePanel, LiveServer} from "../Live"
import Footer from "../Footer"
import Patreon from '../Patreon'
import {getNewsByPage} from "../requests"
import {shallowEqual, useDispatch, useSelector} from "react-redux"
import {LadderNews, LiveLadderWidget} from "../Ladder"
import {ROUTES} from "../utils/constants"
import {useWindowDimensions} from "../utils"

import './scss/styles-homepage.scss'


const HomePage = () => {
    const history = useHistory();
    const location = useLocation();
    const params: any = useParams();
    const dispatch = useDispatch();
    const newsCache = useSelector((state: any) => state.newsPageReducer, shallowEqual);
    const [page, setPage] = useState(params?.p ? params.p : 1);
    const [pages, setPages] = useState(0);
    const [news, setNews] = useState([]);
    const maxElementsOnPage = 3;
    const {width} = useWindowDimensions();

    const routeHomeWithPage = useRouteMatch(ROUTES.homeWithPage);
    const isHomePath = Boolean(location.pathname === ROUTES.root || routeHomeWithPage)
    const isServerPath = Boolean(useRouteMatch(ROUTES.server))

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const getLadderNews = () => {
        return news.map((ns: any, i) => {
            return <Segment key={i} textAlign='center' className={'base-segment'}>
                {ns.is_weekly_ladder ?
                    <LadderNews body={ns.body} week_name={ns.week_name}/> : null}
            </Segment>
        })
    }

    const getNewsPagination = () => {
        return <Container textAlign={"center"} className={'base-pagination'}>
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
    }

    const getLiveServerPage = () => {
        return <Segment textAlign='center' className={'base-segment'}>
            <LiveServer address={params?.server}/>
        </Segment>
    }

    return <div className={'home-page'}>
        {
            width < 1200
                ? <div className={'media-small-screen'}>
                    <LivePanel background={'/images/beast_unit_predator.jpg'} serverProp={params?.server}/>
                    <br/>
                    <Discord/>
                </div>
                : <div>
                    <div className={'media-large-screen'}>
                        <Grid columns='equal'>
                            <Grid.Column>
                                <Container className={'base-align-right'}>
                                    <Discord/>
                                    <br/>
                                    <LiveLadderWidget/>
                                    <br/>
                                    <Patreon/>
                                </Container>
                            </Grid.Column>
                            <Grid.Column width={7}>
                                <Container className={'base-container'}>
                                    {isHomePath ? getLadderNews() : null}
                                    {isHomePath ? getNewsPagination() : null}
                                    {isServerPath ? getLiveServerPage() : null}
                                </Container>
                            </Grid.Column>
                            <Grid.Column>
                                <Container className={'base'}>
                                    <LivePanel background={'/images/beast_unit_predator.jpg'} serverProp={params?.server}/>
                                </Container>
                            </Grid.Column>
                        </Grid>
                    </div>
                    <Footer/>
                </div>
        }
    </div>
}

export default HomePage