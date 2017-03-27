/**
 * Created by altair on 25.03.17.
 */

import React from 'react';
import FullUserInfo from "../components/user/FullUserInfo";
import PostList from "../components/posts/PostList";
import CreatePostForm from "../components/posts/CreatePostForm";
import Box from 'grommet/components/Box';


class UserPage extends React.Component {

    getCurrentUser = () => {
        console.log(this.props);
        let userId = this.props.users.currentUserId;
        if (userId === null) {
            return null;
        }
        return this.props.users.list[userId];
    };

    render() {
        //basis="full" size={{width: 'full'}}
        let currentUser = this.getCurrentUser();
        return (
            <div style={{width: '100%'}}>
                <FullUserInfo user={currentUser}/>
                <CreatePostForm createPost={this.props.methods.posts.add}/>
                <PostList posts={currentUser.posts.list}/>
            </div>);
    }
}

export default UserPage;