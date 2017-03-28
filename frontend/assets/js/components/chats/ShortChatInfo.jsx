/**
 * Created by altair on 28.03.17.
 */

import React from 'react';
import Heading from 'grommet/components/Heading';


class ShortChatInfo extends React.Component {
    render() {
        return (
            <Heading align='start' tag='h3' strong={true}>
                {this.props.chat.name}
            </Heading>);
    }
}

ShortChatInfo.propTypes = {
    chat: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
    }).isRequired
};

export default ShortChatInfo;