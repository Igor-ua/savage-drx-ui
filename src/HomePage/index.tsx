import React, {useState} from 'react'
import './scss/styles-homepage.scss';
import Navigation from "../Navigation";
import Discord from "../Discord";
import {Container, Grid, Pagination, Segment} from "semantic-ui-react";
import {getNews} from "./News"

export default () => {
    const [page, setPage] = useState(1);
    const news = getNews();
    const maxElementsOnPage = 3;

    return <div className={'home-page'} style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/welcome-page-background.jpg'})`
    }}>
        <Navigation/>
        <div className={'grid-wrapper'}>
            <Grid columns='equal'>
                <Grid.Column>
                    <Container className={'base'}>
                        123
                    </Container>
                </Grid.Column>
                <Grid.Column width={6}>
                    <Container className={'base'}>
                        {news.map((n, i) => {
                            if (i >= (page - 1) * maxElementsOnPage && i < page * maxElementsOnPage) {
                                return <Segment inverted secondary key={i}>
                                    {n}
                                </Segment>
                            }
                        })}
                        <Container textAlign={"center"} className={'pagination'}>
                            <Pagination
                                inverted
                                boundaryRange={0}
                                defaultActivePage={page}
                                ellipsisItem={null}
                                firstItem={null}
                                lastItem={null}
                                siblingRange={1}
                                totalPages={Math.round(news.length / maxElementsOnPage)}
                                onPageChange={(e, {activePage}) => {
                                    setPage(Number(activePage))
                                }}
                            />
                        </Container>
                    </Container>
                </Grid.Column>
                <Grid.Column>
                    <Container className={'base'}>
                        <Discord/>
                    </Container>
                </Grid.Column>
            </Grid>
        </div>
    </div>
}