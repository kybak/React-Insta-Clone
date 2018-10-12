import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FlexRow, FlexColumn} from "../Elements/Flex";
import styled from 'styled-components'
import CommentSection from '../CommentSection/CommentSection'

const Post = styled(FlexColumn)`
    background: white;
    border-radius: 6px;
    box-shadow: 1px 1px 5px #00000024;
    margin: 20px 0;
`;

const Logo = styled.div.attrs({
    url: props => props.url
})`
    background: url(${props => props.url});
    background-size: contain;
    background-repeat: no-repeat;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin: 0 10px;
`;

const Img = styled.div.attrs({
    url: props => props.url
})`
    background: url(${props => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    height: 500px;
    width: 600px;
`;

class PostContainer extends Component {
    constructor(props) {
        super();

        this.state = {
            comment: ""
        }
    }

    render() {
        const {post, addComment, like} = this.props;

        return (
            <Post alignCenter justifyBetween onKeyUp={e => addComment(e, post.id, this.state.comment)}>
                <FlexRow alignCenter height="60px" width="full">
                    <Logo url={post.thumbnailUrl}/>
                    <b>{post.username}</b>
                </FlexRow>

                <FlexRow>
                    <Img url={post.imageUrl}/>
                </FlexRow>

                <CommentSection likes={post.likes}
                                comments={post.comments}
                                timestamp={post.timestamp}
                                changeComment={e => this.setState({comment: e.target.value})}
                                like={() => like(post.id)}
                />
            </Post>
        );
    }

};


PostContainer.propTypes = {
    post: PropTypes.shape({
        addComment: PropTypes.function,
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired,
        comments: PropTypes.array.isRequired,
    }),
}


export default PostContainer;
