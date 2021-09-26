import React, {useState} from 'react';
import {Container, Grid, Pagination, Segment} from "semantic-ui-react";
import {useHistory} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import './scss/styles-homepage.scss';

import Discord from "../Discord";
import {getNews} from "./News";
import Live from "../Live";

export default () => {
    const history = useHistory();
    const params: any = useParams();
    const [page, setPage] = useState(params?.p ? params.p : 1);
    const news = getNews();
    const maxElementsOnPage = 3;

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
                        {news.map((ns, i) => {
                            if (i >= (page - 1) * maxElementsOnPage && i < page * maxElementsOnPage) {
                                return <Segment inverted secondary key={i}>
                                    {ns}
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