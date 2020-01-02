import React from 'react';
import styled from 'styled-components';

export default class Infos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            data: false
        };
        this.receiveData = this.receiveData.bind(this);
    }
    
    componentDidMount() {
        fetch ('http://localhost/bdr/?rest_route=/wp/v2/posts&categories=5')
        .then(response => {
            return response.json();
        })
        .then(jsonResponse => {
            const infoCardExcerpt = jsonResponse[0].excerpt.rendered;
            this.receiveData(infoCardExcerpt);
        });
    }
    receiveData(data) {
        this.setState({data});
    }

    render(){
        return(
            <>
            <CardText>
                <div> { ReactHtmlParser (this.state.data) } </div>
            </CardText>
            <PlusButton>
                <img src={plusIcon} />
                <p> Saiba mais sobre o infográfico. </p>
            </PlusButton>
            </>
        );
    }
}