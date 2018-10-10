import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Authenticate = App =>
    class extends Component {
        render() {
            return <App />;
        }
    };

export default Authenticate;
