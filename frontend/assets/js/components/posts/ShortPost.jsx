/**
 * Created by altair on 26.03.17.
 */

import React from 'react';
import AuthorInfo from '../user/AuthorInfo';
import ListItem from 'grommet/components/ListItem';
import Paragraph from 'grommet/components/Paragraph';


class ShortPost extends React.Component {
    render() {
        return (
            <ListItem direction="column" align="start" colorIndex="accent-2-t" basis="full">
                <AuthorInfo user={this.props.post.author}/>
                <Paragraph>{this.props.post.text}</Paragraph>
            </ListItem>);
    }
}

ShortPost.propTypes = {
    post: React.PropTypes.shape({
        author: React.PropTypes.object.isRequired,
        text: React.PropTypes.string.isRequired
    })
};

export default ShortPost;