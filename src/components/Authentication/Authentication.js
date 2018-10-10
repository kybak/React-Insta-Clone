import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Login from '../Login/Login'

const Authenticate = App =>
    class extends Component {
        state = {
            isLoggedIn: false
        };

        componentDidMount() {
            let userName  = localStorage.getItem('userName');
            if (userName) this.setState(() => ({isLoggedIn: true}));
        }


        render() {
            return <>{this.state.isLoggedIn ? <App/> : <Login/>}</>

        }
    };

export default Authenticate;
