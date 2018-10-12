import React from 'react';
import PropTypes from 'prop-types';
import {FlexRow} from "../Elements/Flex";
import styled from 'styled-components'

const Logo = styled.img`
    margin-right: 15px;
`;

const Instagram = styled.img`
    margin: 11px 0 0 15px;
`

const Search = styled.input`
    border: thin solid lightgrey;
    border-radius: 5px;
    height: 30px;
    width: 30%;
    background-image: url('search.svg');
    background-repeat: no-repeat;
    background-position: 4px;
    background-size: 7%;
    padding-left: 28px;
    box-sizing: border-box;
`

const Action = styled.img`

`

const Bar = styled(FlexRow)`
    background: white;
    padding: 10px;
    max-width: 700px;
    width: 100%;
    margin: 20px 0 40px 0;
    border-radius: 6px;
    box-shadow: 1px 1px 5px #00000024;
`;

const Divider = styled.div`
    width: 1px;
    background: lightgray;
    height: 40px
`

const SearchBar = props => {
    const {search} = props;

    return (
        <Bar height="65px" alignCenter justifyBetween>
            <FlexRow alignCenter>
                <Logo src="logo.svg" height={40} />
                <Divider />
                <Instagram src="instagram.svg" height={40} />
            </FlexRow>

            <Search placeholder="Search posts" onKeyUp={e => search(e)}/>

            <FlexRow alignCenter>
                <Action src="discover.svg" height={40} />
                <Action src="like.svg" height={40} />
                <Action src="user.svg" height={40} />
            </FlexRow>

        </Bar>
    );
};

export default SearchBar;
