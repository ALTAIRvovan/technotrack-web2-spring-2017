import 'grommet/grommet.min.css';
import React from 'react';
import App from 'grommet/components/App';
import Split from 'grommet/components/Split';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Layer from 'grommet/components/Layer';

import {getPageByPath} from "../helpers";

const test = "testTaAT";

const POSTS_BY_USER = {
    1: [
        {
            "id": 4,
            "text": "glkfjdlkjgld2222",
            "updated_at": "2017-03-22T13:11:39.613418Z",
            "author": {
                "id": 1,
                "first_name": "Владимир",
                "last_name": "Панов"
            }
        },
        {
            "id": 3,
            "text": "glkfjdlkjgld",
            "updated_at": "2017-03-22T13:07:23.875949Z",
            "author": {
                "id": 1,
                "first_name": "Владимир",
                "last_name": "Панов"
            }
        },
        {
            "id": 2,
            "text": "teskgkjsrlkgjdrlhgkd",
            "updated_at": "2017-03-22T13:02:08.756202Z",
            "author": {
                "id": 1,
                "first_name": "Владимир",
                "last_name": "Панов"
            }
        },
        {
            id: 1,
            text: "test12",
            updated_at: "2017-03-22T13:01:51.818620Z",
            author: {
                "id": 1,
                "first_name": "Владимир",
                "last_name": "Панов"
            }
        }
    ]
};

const USER_LIST = {
    1: {
        id: 1,
        username: 'altairvovan',
        last_name: 'Panov',
        first_name: 'Vladimir',
        email: 'volodka.1995@mail.ru',

    },
    3: {
        id: 3,
        username: 'zayavitel',
        last_name: 'Заявитель',
        first_name: 'Заявлев',
        email: 'test@test.ru'
    }
};

const FRIENDS_TO_USER = {
    1: [
        {
            "url": "http://track.my/api/v1/users/2/",
            "username": "test1",
            "first_name": "Test1",
            "last_name": "Testovich"
        },
        {
            "url": "http://track.my/api/v1/users/3/",
            "username": "test2",
            "first_name": "Test2",
            "last_name": "Testovich"
        },
        {
            "url": "http://track.my/api/v1/users/4/",
            "username": "test4",
            "first_name": "Test4",
            "last_name": "Testovich"
        }
    ]
};

const FRIENDS_OUT_REQUESTS = [
    {
        "id": 6,
        "author": 1,
        "recipient": 4,
        "approved": false
    }
];

const FRIENDS_REQUESTS = [
    {
        "id": 7,
        "author": 3,
        "recipient": 1,
        "approved": false
    }
];

class AppContainer extends React.Component {

    state = {
        currentPage: null,
        users: {
            isFetching: false,
            list: USER_LIST,
            currentUserId: 1
        },
        posts: {
            isFetching: false,
            list: POSTS_BY_USER,
        },
        friends: {
            isFetching: false,
            list: FRIENDS_TO_USER,
            requests: FRIENDS_REQUESTS,
            out_requests: FRIENDS_OUT_REQUESTS,
        },

        layer: {
            isOpen: false,
            content: null,
        }
    };

    getCurrentUser = () => {
        // console.log(this.state);
        let userId = this.state.users.currentUserId;
        if (userId === null) {
            return null;
        }
        return this.state.users.list[userId];
    };


    currentUserAddPost = (post_text) => {
        console.log(post_text);
        let user = this.getCurrentUser();
        // console.log(user);
        let posts_list = this.state.posts.list[user.id];
        posts_list.push({text: post_text, author: user, id: posts_list.length});
        let newState = {
            posts: {
                list: {}
            }
        };
        newState.posts.list[user.id] = posts_list;
        this.setState(newState);
    };

    closeLayer = () => {
        this.setState({layer: {isOpen: false}});
    };

    openLayer = (content) => {
        this.setState({layer: {isOpen: true, content}});
    };

    methods = {
        methods: {
            posts: {
                add: this.currentUserAddPost,
            },
            layer: {
                open: this.openLayer
            }
        },
    };

    onMenuElementClick = (path) => {
        console.log(path);
        this.setState({currentPage: getPageByPath(path, this.state, this.methods)});
    };

    render() {
        let layer = null;
        if (this.state.layer.isOpen) {
            layer = (
                <Layer closer={true}
                       flush={false}
                       onClose={this.closeLayer}>
                    {this.state.layer.content}
                </Layer>)
        }
        return (
            <App>
                <Header/>
                <Split flex='right' priority='right' fixed={false}>
                    <Sidebar onMenuElementClick={ this.onMenuElementClick }/>
                    <Section colorIndex='neutral-2'
                             align='start'
                             pad='medium'
                             basis="full"
                             wrap={true}
                    >
                        { this.state.currentPage }
                    </Section>
                </Split>
                {layer}
            </App>);
    }
}

export default AppContainer;