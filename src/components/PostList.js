import React, {Component} from 'react'
import ReactHtmlParser from 'react-html-parser'; 

class PostList extends Component {
   constructor(props) {
       super(props);
       this.state = {
           posts: [],
           data: false
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
            const ebookCardTitle = jsonResponse[1].title.rendered;
            const ebookCardExcerpt = jsonResponse[1].excerpt.rendered;
            var ebookCard = ebookCardTitle.concat(ebookCardExcerpt);
            this.receiveData(ebookCard);
        });
    }
    receiveData(data) {
        this.setState({data});
    }
    render() {
        return(
            <div> { ReactHtmlParser (this.state.data) } </div>
            );
        }
    }
    
    export default PostList;