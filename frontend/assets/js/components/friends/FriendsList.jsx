/**
 * Created by altair on 28.03.17.
 */

import React from 'react';
import List from 'grommet/components/List';

import ListPlaceholder from 'grommet-addons/components/ListPlaceholder';
import ListItem from 'grommet/components/ListItem';


class FriendsList extends React.Component {
    render() {
        let friends_list = null;
        let prop_friends = this.props.friends;
        let component = this.props.component;
        if (prop_friends) {
            if (prop_friends instanceof Array) {
                friends_list = prop_friends.map(element => (
                    <ListItem key={element.username}>
                        {React.createElement(component, {user: element})}
                    </ListItem>)
                );
            } else {
                friends_list = [];
                for (let index in prop_friends) {
                    let element = prop_friends[index];
                    friends_list.push(
                        <ListItem key={index}>
                            {React.createElement(component, {user: element})}
                        </ListItem>);
                }
            }
        }
        return (
            <List>
                {friends_list}
            </List>
        )
    }
}

FriendsList.propTypes = {
    friends: React.PropTypes.oneOfType([React.PropTypes.array, React.PropTypes.object]).isRequired,
    component: React.PropTypes.func.isRequired,
};

export default FriendsList;
