/**
 * Created by altair on 27.03.17.
 */

import React from 'react';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import FriendInfo from '../components/user/FriendInfo';
import Heading from 'grommet/components/Heading';
import FriendsList from '../components/friends/FriendsList';
import FriendRequestInfo from '../components/friends/FriendReqestInfo';

class FriendsPage extends React.Component {
    getFriends = () => {
        let friends_list = null;
        let user_id = this.props.parent_state.users.currentUserId;
        let prop_frineds = this.props.parent_state.friends;
        if (prop_frineds && prop_frineds.list != null && prop_frineds.list[user_id] != null) {
            friends_list = prop_frineds.list[user_id];
        }
        return friends_list;
    };

    getRequets = () => {
        let friends_list = null;
        let prop_frineds = this.props.parent_state.friends;
        if (prop_frineds && prop_frineds.requests != null) {
            let users = this.props.parent_state.users.list;
            friends_list = prop_frineds.requests.map(element => (users[element.author]));
        }
        return friends_list;
    };

    render() {

        return (
            <div>
                <Heading tag="h2">Заявки в друзья</Heading>
                <FriendsList friends={this.getRequets()} component={FriendRequestInfo}/>
                <Heading tag="h2">Друзья</Heading>
                <FriendsList friends={this.getFriends()} component={FriendInfo}/>
            </div>
        );
    }
}

export default FriendsPage;