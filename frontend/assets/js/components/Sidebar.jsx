/**
 * Created by altair on 23.03.17.
 */

import React from 'react';
import Sidebar from 'grommet/components/Sidebar';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';

class SidebarComponent extends React.Component {

    onMenuClick = (event) => {
         event.preventDefault();
         //console.log(event.target.pathname);
         this.props.onMenuElementClick(event.target.pathname);
    };

    render() {
        return (
            <Sidebar>
                <Box justify='start' flex='grow'>
                    <Menu primary={true} onClick={this.onMenuClick}>
                        <Anchor href='/feed'>
                            Feed
                        </Anchor>
                        <Anchor href='/user'>
                            User
                        </Anchor>
                        <Anchor href='/friends'>
                            Friends
                        </Anchor>
                        <Anchor href='/login'>
                            Login
                        </Anchor>
                    </Menu>
                </Box>
            </Sidebar>
        );
    }
}

SidebarComponent.propTypes =  {
    onMenuElementClick: React.PropTypes.func.isRequired,
};

export default SidebarComponent;