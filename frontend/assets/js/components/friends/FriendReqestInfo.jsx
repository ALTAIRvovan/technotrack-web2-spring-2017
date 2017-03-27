/**
 * Created by altair on 28.03.17.
 */

import React from 'react';
import FriendInfo from '../user/FriendInfo';
import Button from 'grommet/components/Button';


class FriendRequestInfo extends React.Component {

    approveRequset = (event) => {
        event.preventDefault();
        console.log("approve friend")
    };

    render() {
        return (
            <div>
                <FriendInfo user={this.props.user}/>
                <Button label='Добавить'
                        onClick={this.approveRequset}
                        primary={false}
                        secondary={false}
                        accent={false}
                        plain={false}/>
            </div>
        );
    }
}

FriendRequestInfo.propTypes = {
    user: React.PropTypes.shape({
        last_name: React.PropTypes.string.isRequired,
        first_name: React.PropTypes.string.isRequired,
    }).isRequired
};

export default FriendRequestInfo;