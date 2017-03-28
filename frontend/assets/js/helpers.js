/**
 * Created by altair on 25.03.17.
 */

import React from 'react';
import Feed from 'pages/Feed';
import User from 'pages/User';
import Friends from 'pages/Friends';
import Login from 'pages/Login';
import ChatList from 'pages/ChatList';
import ChatInfo from 'pages/ChatInfo';
import UserSearchPage from 'pages/UserSearchPage';


export function getPageByPath(path, state, methods = null) {
    switch (path) {
        case "/feed":
            return <Feed currentUser={state.users.currentUserId}
                         feed={state.feed}
                         updateFeed={methods.feed.update}
                         layerOpen={methods.layer.open}/>;
        case "/user":
            return <User createPost={methods.posts.add}
                         layerOpen={methods.layer.open}
                         posts={state.posts}
                         users={state.users}/>;
        case "/friends":
            return <Friends userList={state.users.list}
                            currentUserId={state.users.currentUserId}
                            friends={state.friends}/>;
        case "/login":
            return <Login/>;
        case "/chats":
            return <ChatList chats={state.chats.list}/>;
        case "/chat_info":
            return <ChatInfo chat={ state.chats.list[1] }
                             messages={state.chats.messages[1] }
                             createMessage={methods.chat.createMessage}/>;

        case "/search":
            return <UserSearchPage doSearch={methods.search.doSearch} users={state.users.list}/>;
        default:
            alert("PAGE NOT FOUND");
    }
}

