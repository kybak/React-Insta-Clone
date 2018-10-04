import React from 'react';
import PropTypes from 'prop-types';
import {FlexRow, FlexColumn} from "../Elements/Flex";
import styled from 'styled-components'
import PostContainer from "../PostContainer/PostContainer";
import moment from 'moment'

const Comments = styled(FlexColumn)`
    padding: 15px;
    box-sizing: border-box;
`;

const Time = styled.span`
    color: #b3b1b1;
    font-size: .75rem;
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background: lightgrey;
`;

const Comment = styled.input`
    height: 50px;
    width: 90%;
    border: none;
    padding-left: 20px;
    box-sizing: border-box;
`;

const Dot = styled.div`
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background: darkgrey;
    margin-right: 3px;
`

const CommentSection = props => {
    const {likes, comments, timestamp} = props;
    let time = timestamp.replace("th", "");

    return (
        <Comments width="full">
            <FlexRow width="full" style={{marginLeft: "-10px"}}>
                <img src="like.svg" height={40}/>
                <img src="message.svg" height={40}/>
            </FlexRow>

            <FlexRow marginBottom="10px"><b>{likes} likes</b></FlexRow>

            {props.comments.map(comment => {
                return (
                    <FlexRow marginTop="10px">
                        <b style={{marginRight: "10px"}}>{comment.username}</b>
                        <span>{comment.text}</span>
                    </FlexRow>
                )
            })}

            <FlexRow marginTop="10px" marginBottom="10px">
                <Time>{moment(new Date(time), "YYYYMMDD").fromNow()}</Time>
            </FlexRow>

            <Divider/>

            <FlexRow width="full" alignCenter>
                <Comment placeholder="Add a comment..."/>
                <Dot></Dot>
                <Dot></Dot>
                <Dot></Dot>
            </FlexRow>

        </Comments>
    );
};

CommentSection.propTypes = {
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        }))
}


export default CommentSection;
