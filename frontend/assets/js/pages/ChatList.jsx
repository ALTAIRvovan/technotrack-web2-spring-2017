/**
 * Created by altair on 28.03.17.
 */

import React from 'react';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import ShortChatInfo from '../components/chats/ShortChatInfo';
import ListPlaceholder from 'grommet-addons/components/ListPlaceholder';
import Header from 'grommet/components/Heading';


class ChatList extends React.Component {

    render() {
        let content = [];
        console.log(this.props.chats);
        for (let elementId in this.props.chats) {
            let element = this.props.chats[elementId];
            content.push((
                <ListItem key={element.id}>
                    <ShortChatInfo chat={element}/>
                </ListItem>))
        }
        return (
            <div>
                <Header>Список чатов</Header>
                <List>
                    {content}
                </List>
            </div>
        );
    }
}

ChatList.propTypes = {
    chats: React.PropTypes.object,
};

export default ChatList;