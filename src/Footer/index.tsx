import React from "react";
import {Container, Icon, Label} from "semantic-ui-react";

import './scss/styles-footer.scss';


export default () => {
    const current_year = new Date().getFullYear()

    return <div className={'csp-footer'}>
        <Container textAlign={"center"} className={'csp-footer-container'}>
            <Label className={'footer-label'}>
                <span className={'footer-drk'}>drk</span>
                <Icon name='copyright outline' size={"small"} className={'footer-icon'}/>
                <span className={'footer-year'}>{current_year}</span>
            </Label>
        </Container>
    </div>
}