/**
 * Created by altair on 26.03.17.
 */

import React from 'react';
import ShortPost from './ShortPost';
import List from 'grommet/components/List';
import ListPlaceholder from 'grommet-addons/components/ListPlaceholder';
import ListItem from 'grommet/components/ListItem';


class PostList extends React.Component {
    render() {
        let content = null;
        if (this.props.posts.length == 0) {
            content = <ListPlaceholder emptyMessage='There is not posts'/>
        } else {
            content = this.props.posts.map(element => (
                <ListItem key={element.id} direction="column" align="start" colorIndex="accent-2-t" basis="full">
                    <ShortPost post={element} openLayer={this.props.openLayer}/>
                </ListItem>))
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