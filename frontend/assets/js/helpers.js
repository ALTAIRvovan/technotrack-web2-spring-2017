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

export function getPageByPath(path, state, other_props = null) {
    let props = {
        parent_state: state,
        other: other_props
    };
    return React.createElement(mapPathToPages[path], props);
}

