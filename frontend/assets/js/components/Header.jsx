/**
 * Created by altair on 23.03.17.
 */

import React from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

class HeaderComponent extends React.Component {


    render() {
        return (
            <Header fixed={true} float={false} colorIndex="neutral-1-t" full="horizontal">
                <Title>TEST</Title>
            </Header>
        );
    }
}

export default HeaderComponent;