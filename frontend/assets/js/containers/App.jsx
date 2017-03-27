import 'grommet/grommet.min.css';
import React from 'react';
import App from 'grommet/components/App';
import Split from 'grommet/components/Split';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

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
        last_name: 'Panov',
        first_name: 'Vladimir',
        email: 'volodka.1995@mail.ru',

    },
};

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

    methods = {
        methods: {
            posts: {
                add: this.currentUserAddPost,
            },
        },
    };

    onMenuElementClick = (path) => {
        console.log(path);
        this.setState({currentPage: getPageByPath(path, this.state, this.methods)});
    };

    render() {
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
            </App>);
    }
}

export default AppContainer;