import React, {Component} from 'react';
import SearchBar from "./components/SearchBar/SearchBar";
import styled from 'styled-components'
import Root from './components/Elements/Root'


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
            </Root>
        );
    }
}

export default App;
