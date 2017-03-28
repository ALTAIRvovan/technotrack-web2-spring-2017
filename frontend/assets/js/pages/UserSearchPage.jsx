/**
 * Created by altair on 28.03.17.
 */

import React from 'react';
import SearchField from "../components/SearchField";
import FriendsList from "../components/friends/FriendsList";
import FriendRequestInfo from "../components/friends/FriendReqestInfo";

class UserSearchPage extends React.Component {

    render() {
        return (
            <div>
                <SearchField doSearch={this.props.doSearch}/>
                <FriendsList friends={this.props.users} component={FriendRequestInfo}/>
            </div>
        );
    }
}

UserSearchPage.propTypes = {
    users: React.PropTypes.object,
    doSearch: React.PropTypes.func
};

export default UserSearchPage;