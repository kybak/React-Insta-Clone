import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Root from '../Elements/Root'
import styled from 'styled-components';
import {FlexColumn, FlexRow} from "../Elements/Flex";

const Container = styled(FlexColumn)`
    background: white;
    border-radius: 6px;
    box-shadow: 1px 1px 5px #00000024;
    margin: 20px 0;
    height: 300px;
    width: 300px;
    margin-top: 10%;
    padding: 20px;
`;

const Input = styled.input`
    border: thin solid lightgrey;
    border-radius: 5px;
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    margin: 10px 0;
`;

const Button = styled.button`
    background: mediumseagreen;
    border-radius: 5px;
    padding: 10px;
    width: 100px;
    color: white;
    border: none;
    cursor: pointer;
    
    &:hover {
        background: #318858;
    }
`;

const H1 = styled.h1`
    font-size: 20px;
    margin: 0
`;

const Form = styled.form`
    width: 100%;
    height: 100%;
`

class Login extends Component {
    state = {
        userName: "",
        password: ""
    };

    handleSubmit = e => {
        e.preventDefault();

        localStorage.setItem('userName', this.state.userName);
        window.location = '/'
    };

    render() {
        return (
            <Root>
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <FlexColumn width="full" height="full" justifyBetween alignCenter>
                            <FlexRow width="full">
                                <H1>Login</H1>
                            </FlexRow>

                            <FlexColumn width="full">
                                <Input placeholder="Username"
                                       onChange={e => this.setState({userName: e.target.value})}/>
                                <Input type="password" placeholder="Password"
                                       onChange={e => this.setState({password: e.target.value})}/>
                            </FlexColumn>

                            <FlexRow width="full" justifyEnd>
                                <Button type="submit">LOGIN</Button>
                            </FlexRow>
                        </FlexColumn>
                    </Form>

                </Container>
            </Root>
        )
    }

};

Login.propTypes = {};

export default Login;
