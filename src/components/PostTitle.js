import React, {Component} from 'react'
import ReactHtmlParser from 'react-html-parser'; 
import styled from 'styled-components';

class PostTitle extends Component {
   constructor(props) {
       super(props);
       this.state = {
           posts: [],
           title: false
       };
       this.receiveData = this.receiveData.bind(this);
   }
    
    componentDidMount() {
        fetch ('http://localhost/bdr/?rest_route=/wp/v2/posts&_embed')
        .then(response => {
            return response.json();
        })
        .then(jsonResponse => {
            const infoCardTitle = jsonResponse[1].title.rendered;
            this.receiveData(infoCardTitle);
        });
    }
    receiveData(title) {
        this.setState({title});
    }
    render() {
        return(
            <CardTitle>
                <div> { ReactHtmlParser (this.state.title) } </div>
            </CardTitle>
            );
        }
    }
    
    export default PostTitle;

    const CardTitle = styled.div`
    word-break: break-all;
    width: 63rem;
    background-color: white;
    margin-left: 32.2rem;
    height: 11rem;
    padding: 1rem;
    margin-top: -7rem;
    font-family: 'Open Sans';
    font-size: xx-large;
    @media (max-width:768px) {
        padding: 3rem;
        width: 100%;
        margin-left: 0;
        margin-top: 20rem;
        text-align: center;
    }
    `;