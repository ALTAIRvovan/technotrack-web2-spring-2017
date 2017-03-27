/**
 * Created by altair on 26.03.17.
 */

import React from 'react';
import AuthorInfo from '../user/AuthorInfo';
import Paragraph from 'grommet/components/Paragraph';


class ShortPost extends React.Component {
    openLayer = (event) => {
        if(this.props.openLayer) {
            event.preventDefault();
            let content = <ShortPost post={this.props.post}/>;
            this.props.openLayer(content);
        }

    };

    render() {
        return (
            <div>
                <AuthorInfo user={this.props.post.author}/>
                <Paragraph onClick={this.openLayer}>{this.props.post.text}</Paragraph>
            </div>
        );
    }
}

ShortPost.propTypes = {
    post: React.PropTypes.shape({
        author: React.PropTypes.object.isRequired,
        text: React.PropTypes.string.isRequired
    })
};

export default ShortPost;