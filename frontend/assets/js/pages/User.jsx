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
        let posts = this.props.posts.list;
        console.log(posts);
        return (
            <div style={{width: '100%'}}>
                <FullUserInfo user={currentUser}/>
                <CreatePostForm createPost={this.props.createPost}/>
                <PostList posts={posts[currentUser.id]} openLayer={this.props.layerOpen} />
            </div>);
    }
}

UserPage.propTypes = {
    users: React.PropTypes.object.isRequired,
    posts: React.PropTypes.object.isRequired,
    layerOpen: React.PropTypes.func.isRequired,
    createPost: React.PropTypes.func.isRequired,
};

export default UserPage;