import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";
import dummyData from '../../data/dummy-data'


class PostsPage extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        this.setState(() => ({posts: dummyData}));
    }

    addComment = (e, id, comment) => {
        if (e.keyCode == 13) {
            const username = localStorage.getItem('userName');

            let posts = this.state.posts, ind = posts.findIndex(p => p.id === id);
            posts[ind].comments.push({username: username, text: comment});
            this.setState({posts: posts})
        }

    };

    like = id => {
      let posts = this.state.posts;
      const ind = posts.findIndex(p => p.id === id);
      if (ind > -1) posts[ind].likes++;
      this.setState(() => ({posts: posts}));
    };

    search = val => {
        let posts = val ? this.state.posts : dummyData;
        posts = posts.filter(p => p.username.toLowerCase().includes(val));
        this.setState(() => ({posts: posts}));
    };

    render() {
        const {posts} = this.state;

        return (
            <>
                <SearchBar search={e => this.search(e.target.value)}/>
                {posts.map(post => {
                    return (
                        <PostContainer key={post.id} post={post} addComment={this.addComment} like={this.like}/>
                    )
                })}
            </>
        );
    }
}


export default PostsPage;
