/**
 * Created by altair on 26.03.17.
 */

import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import Value from 'grommet/components/Value';


class FullUserInfo extends React.Component {

    render() {
        return (
            <Box justify='start' align='start'>
                <Heading align='start' tag='h2' strong={true}>
                    {this.props.user.last_name} {this.props.user.first_name}
                </Heading>
                <Label>Email: <Value size='small' value={this.props.user.email} /></Label>
            </Box>);
    }
}

FullUserInfo.propTypes = {
    user: React.PropTypes.shape({
        last_name: React.PropTypes.string.isRequired,
        first_name: React.PropTypes.string.isRequired,
        email: React.PropTypes.string.isRequired
    }).isRequired
};

export default FullUserInfo;