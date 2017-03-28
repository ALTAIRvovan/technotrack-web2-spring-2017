/**
 * Created by altair on 28.03.17.
 */

import React from 'react';
import AuthorInfo from '../user/AuthorInfo';
import Paragraph from 'grommet/components/Paragraph';

class FeedElement extends React.Component {
    openLayer = (event) => {
        event.preventDefault();
        if (this.props.layerOpen) {
            this.props.layerOpen(<FeedElement element={this.props.element}/>);
        }
    };

    render() {
        return (
            <div>
                <AuthorInfo user={this.props.element.author}/>
                <Paragraph onClick={this.openLayer}>{this.props.element.content_object}</Paragraph>
            </div>
        )
    }
}

FeedElement.propTypes = {
    element: React.PropTypes.object.isRequired,
    layerOpen: React.PropTypes.func,
};

export default FeedElement;