import React, { Component } from 'react';
import axios from 'axios';
// import App from '../App';

	export default class Posts extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				posts: [],
				dataRoute:  "http://localhost/wordpress/wp-json/sections/v1/post"
			}
		}

	componentDidMount() {
		var th = this;
		this.serverRequest = 
		axios.get(this.props.source)
			.then(function(result) {    
				th.setState({
				posts: result.data
			});
		})
	}

	componentWillUnmount () {
		this.serverRequest.abort();
	}

	render() {
		return (
			<div className="post-wrapper">
			{this.state.posts.map(function(post) {
				return (
					<div key={post.link} className="post">
						<h2 className="post-title"><a href={post.link}
						dangerouslySetInnerHTML={{__html:post.title.rendered}}
						/></h2>
						{post.featured_media ?
							<a href={post.link}><img src={post._embedded['wp:featuredmedia'][0].media_details.sizes["large"].source_url} /></a>
						: null}
						{post.excerpt.rendered ?
							<div className="excerpt" dangerouslySetInnerHTML={{__html:post.excerpt.rendered}} />
						: null}
						<div className="entry-meta">
							<a className="author-wrap" href={post._embedded.author[0].link}><img className="avatar" src={post._embedded.author[0].avatar_urls['48']} />by&nbsp; {post._embedded.author[0].name}</a>
							<a className="button read-more" href={post.link}>Read More &raquo;</a>
						</div>
					</div>
				);
			})}
			</div>
		)
	}
	
}


// React.render(<App source="http://localhost/?rest_route=/wp/v2/posts/" />, document.querySelector("#posts"));
