/**
 * Created by altair on 28.03.17.
 */

import React from 'react';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import FriendInfo from '../components/user/FriendInfo';
import Header from 'grommet/components/Heading';
import ChatMessage from '../components/chats/ChatMessage';
import CreateMessageForm from '../components/chats/CreateMessageForm';

class ChatInfo extends React.Component {
    createMessage = (message) => {
        this.props.createMessage(message, this.props.chat)
    };

    render() {
        console.log(this.props.chat);
        let members = this.props.chat.members.map((element) => (
            <ListItem key={element.username}>
                <FriendInfo user={element}/>
            </ListItem>
        ));

        let messages = [];
        for (let messageId in this.props.messages) {
            messages.push((
                <ListItem key={messageId}>
                    <ChatMessage message={this.props.messages[messageId]}/>
                </ListItem>))
        }

        return (
            <div>
                <Header tag="h3">Участники</Header>
                <List>
                    {members}
                </List>
                <Header tag="h3">Cообщения</Header>
                <List>
                    {messages}
                </List>
                <CreateMessageForm sendMessage={this.createMessage}/>
            </div>
        )
    }
}

ChatInfo.propTypes = {
    chat: React.PropTypes.object.isRequired,
    messages: React.PropTypes.object.isRequired,
    createMessage: React.PropTypes.func
};

export default ChatInfo;