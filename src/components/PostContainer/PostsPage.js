import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";
import dummyData from '../../data/dummy-data'

class PostsPage extends Component {
    state = {
        posts: dummyData
    }

    addComment = (e, id, comment) => {
        if (e.keyCode == 13) {
            const username = localStorage.getItem('userName');

            let posts = this.state.posts, ind = posts.findIndex(p => p.id === id);
            posts[ind].comments.push({username: username, text: comment});
            this.setState({posts: posts})
        }

    };

    render() {
        const {posts} = this.state;

        return (
            <>
                <SearchBar/>
                {posts.map(post => {
                    return (
                        <PostContainer key={post.id} post={post} addComment={this.addComment}/>
                    )
                })}
            </>
        );
    }
}


export default PostsPage;
