import React, {Component} from 'react'
import ReactHtmlParser from 'react-html-parser'; 

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
            const ebookCardImage = jsonResponse[1]._embedded['wp:featuredmedia']['0'].source_url;
            this.receiveData(ebookCardImage);
        });
    }
    receiveData(data) {
        this.setState({data});
    }
    render() {
        return(
            <div> <img src={ ReactHtmlParser (this.state.data)} /> </div>
            );
        }
    }
    
    export default PostImage;