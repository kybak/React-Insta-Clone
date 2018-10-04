import React, {Component} from 'react';
import SearchBar from "./components/SearchBar/SearchBar";
import styled from 'styled-components'
import PropTypes from 'prop-types';
import Root from './components/Elements/Root'
import PostContainer from "./components/PostContainer/PostContainer";
import dummyData from './data/dummy-data'



class App extends Component {
    state = {
        posts: dummyData
    }

    addComment = (e, id, comment) => {
        if (e.keyCode == 13) {
            let posts = this.state.posts, ind = posts.findIndex(p => p.id === id), comment = document.querySelect('comment').target.value;
            posts[ind].comments.push({username: "test", comment: comment});
            this.setState({posts: posts})
        }

    };


    render() {
        const {posts} = this.state;

        return (
            <Root>
                <SearchBar/>
                {posts.map(post => {
                    return (
                        <PostContainer key={post.id} post={post} addComment={(id, comment) => this.addComment(id, comment)}/>
                    )
                })}
            </Root>
        );
    }
}


export default App;
