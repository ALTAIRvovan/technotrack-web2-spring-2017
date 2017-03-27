/**
 * Created by altair on 26.03.17.
 */

import React from 'react';
import ShortPost from './ShortPost';
import List from 'grommet/components/List';
import ListPlaceholder from 'grommet-addons/components/ListPlaceholder';


class PostList extends React.Component {
    render() {
        let content = null;
        if(this.props.posts.length == 0) {
            content = <ListPlaceholder emptyMessage='There is not posts' />
        } else {
            content = this.props.posts.map(element => <ShortPost key={element.id} post={element}/>)
        }
        return (
            <List>
                { content }
            </List>
        )
    }
}

PostList.propTypes = {
    posts: React.PropTypes.array.isRequired,
};

export default PostList;