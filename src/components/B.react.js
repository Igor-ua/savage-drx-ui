import React, {Component} from 'react';

import API from './Api';

class BComponent extends Component {
    state = {
        online: []
    }

    constructor(props, context) {
        super(props, context);
        this.getData()
    }

    getData() {
        API.get(`stats/online/1612289411/1612289478`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return <div>B-Component</div>
    }
}

export default BComponent;