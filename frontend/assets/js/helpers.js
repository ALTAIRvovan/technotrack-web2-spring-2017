/**
 * Created by altair on 25.03.17.
 */

import React from 'react';
import Feed from 'pages/Feed';
import User from 'pages/User';
import Friends from 'pages/Friends';
import Login from 'pages/Login';

const mapPathToPages = {
    "/feed": Feed,
    "/user": User,
    "/friends": Friends,
    "/login": Login,
};

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
        default:
            alert("PAGE NOT FOUND");
    }
}

