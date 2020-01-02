import React from 'react'
import ReactHtmlParser from 'react-html-parser'; 
import styled from 'styled-components';
import plusIcon from '../assets/plus.svg';

export default class Ebooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            data: false
        };
        this.receiveData = this.receiveData.bind(this);
    }
    
    componentDidMount() {
        fetch ('http://localhost/bdr/?rest_route=/wp/v2/posts')
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

const CardText = styled.div`
word-break: break-word;
width: 63rem;
background-color: white;
margin-left: 32.2rem;
height: 23rem;
font-size: large;
padding: 1rem;
margin-top: -7rem;
font-family: 'Open Sans';
@media (max-width:768px) {
    width: 100%;
    margin-left: 0;
    margin-top: -1rem;
    text-align: center;
}
`;
const PlusButton = styled.div`
width: 10rem;
margin-top: -6rem;
margin-left: 34rem;
& p {
    position: absolute;
    margin-left: 5rem;
    margin-top: -3.2rem;
    font-size: initial;
    color: blue;
    font-family: 'Open Sans';
    color: #09d3ac;
}
@media (max-width:768px) {
    margin-left: 4rem;
}
`;