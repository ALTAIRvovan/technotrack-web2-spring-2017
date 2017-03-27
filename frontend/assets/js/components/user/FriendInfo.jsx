/**
 * Created by altair on 27.03.17.
 */

import React from 'react';
import Heading from 'grommet/components/Heading';


class FriendInfo extends React.Component {
    render() {
        return (
            <Heading align='start' tag='h3' strong={true}>
                {this.props.user.last_name} {this.props.user.first_name}
            </Heading>);
    }
}

FriendInfo.propTypes = {
    user: React.PropTypes.shape({
        last_name: React.PropTypes.string.isRequired,
        first_name: React.PropTypes.string.isRequired,
    }).isRequired
};

export default FriendInfo;