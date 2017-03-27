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
        let userId = this.props.parent_state.users.currentUserId;
        if (userId === null) {
            return null;
        }
        return this.props.parent_state.users.list[userId];
    };

    render() {
        //basis="full" size={{width: 'full'}}
        let currentUser = this.getCurrentUser();
        let posts = this.props.parent_state.posts.list;
        console.log(posts);
        return (
            <div style={{width: '100%'}}>
                <FullUserInfo user={currentUser}/>
                <CreatePostForm createPost={this.props.other.methods.posts.add}/>
                <PostList posts={posts[currentUser.id]} openLayer={this.props.other.methods.layer.open} />
            </div>);
    }
}

export default UserPage;