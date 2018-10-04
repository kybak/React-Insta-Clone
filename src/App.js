import React, {Component} from 'react';
import SearchBar from "./components/SearchBar/SearchBar";
import styled from 'styled-components'
import PropTypes from 'prop-types';
import Root from './components/Elements/Root'
import PostContainer from "./components/PostContainer/PostContainer";
import dummyData from './data/dummy-data'


/*const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #f1f1f1;
    display: flex;
    flex-direction: column;
    background: white;
    width: 500px;
    height: 600px;
`;*/


class App extends Component {
    render() {
        return (
            <Root>
                <SearchBar/>
                {dummyData.map(post => {
                    return (
                        <PostContainer key={post.id} post={post}/>
                    )
                })}
            </Root>
        );
    }
}

App.propTypes = {
    search: PropTypes.string
};

export default App;
