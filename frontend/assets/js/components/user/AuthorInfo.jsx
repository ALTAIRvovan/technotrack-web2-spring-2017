/**
 * Created by altair on 26.03.17.
 */

import React from 'react';
import Heading from 'grommet/components/Heading';


class AuthorInfo extends React.Component {
    render() {
        return (
            <Heading align='start' tag='h3' strong={true}>
                {this.props.user.last_name} {this.props.user.first_name}
            </Heading>);
    }
}

AuthorInfo.propTypes = {
    user: React.PropTypes.shape({
        last_name: React.PropTypes.string.isRequired,
        first_name: React.PropTypes.string.isRequired,
    }).isRequired
};

export default AuthorInfo;