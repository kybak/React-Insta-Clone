import React, {Component} from 'react';
import Root from './components/Elements/Root'
import PostsPage from './components/PostContainer/PostsPage'
import Authenticate from './components/Authentication/Authentication'

class App extends Component {

    render() {

        return (
            <Root>
                <PostsPage/>
            </Root>
        );
    }
}


export default Authenticate(App);
