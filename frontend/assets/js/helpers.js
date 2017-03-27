/**
 * Created by altair on 25.03.17.
 */

import React from 'react';
import Feed from 'pages/Feed';
import User from 'pages/User';

const mapPathToPages = {
    "/feed": Feed,
    "/user": User,
};

export function getPageByPath(path, state, other_props = null) {
    let props = Object.assign({}, state, other_props);
    return React.createElement(mapPathToPages[path], props);
}

