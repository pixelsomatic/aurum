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
        var _self = this;
        fetch ('http://localhost/bdr/?rest_route=/wp/v2/posts/')
        .then(response => {
            return response.json();
        })
        .then(jsonResponse => {
            console.log(jsonResponse);
            const ebookCard = JSON.stringify(jsonResponse[0]);
            _self.receiveData(ebookCard);
        });
    }
    receiveData(data) {
        this.setState({data});
    }
    render() {
        return(
            <div> { ReactHtmlParser (this.state.data) } 
            </div>
            );
        }
    }
    
    export default PostList;