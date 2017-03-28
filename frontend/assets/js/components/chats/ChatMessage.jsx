/**
 * Created by altair on 28.03.17.
 */

import React from 'react';
import Paragraph from 'grommet/components/Paragraph';
import AuthorInfo from "../user/AuthorInfo";
import Box from 'grommet/components/Box';


class ChatMessage extends React.Component {
    render() {
        //TODO: здесь ID this.props.message.author, нужен метод для поиска человека по id
        let author = {
            last_name: "Chatter",
            first_name: "Chat",
        };
        return (
            <Box colorIndex="neutral-3-a" >
                <AuthorInfo user={author} />
                <Paragraph>{this.props.message.text}</Paragraph>
            </Box>);
    }
}

ChatMessage.propTypes = {
    message: React.PropTypes.shape({
        author: React.PropTypes.number.isRequired,
        text: React.PropTypes.string.isRequired,
    }).isRequired,
    members: React.PropTypes.object,
};

export default ChatMessage;