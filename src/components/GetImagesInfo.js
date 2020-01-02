import React, {Component} from 'react'
import ReactHtmlParser from 'react-html-parser'; 
import styled from 'styled-components';

class PostImage extends Component {
   constructor(props) {
       super(props);
       this.state = {
           image: false
       };
       this.receiveData = this.receiveData.bind(this);
   }
    
    componentDidMount() {
        fetch ('http://localhost/bdr/?rest_route=/wp/v2/posts&_embed')
        .then(response => {
            return response.json();
        })
        .then(jsonResponse => {
            console.log(jsonResponse);
            const ebookCardImage = jsonResponse[0]._embedded['wp:featuredmedia']['0'].source_url;
            this.receiveData(ebookCardImage);
        });
    }
    receiveData(data) {
        this.setState({data});
    }
    render() {
        return(
            <GetImages>
                <img src={this.state.data} />
            </GetImages>
            );
        }
    }
    
    export default PostImage;

    const GetImages = styled.div`
        height: 10rem;
        & img {
            height: 30rem;
        } `;