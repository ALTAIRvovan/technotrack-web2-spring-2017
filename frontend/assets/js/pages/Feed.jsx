/**
 * Created by altair on 25.03.17.
 */

import React from 'react';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import FeedElement from '../components/feed/FeedElement';
import ListPlaceholder from 'grommet-addons/components/ListPlaceholder';


class FeedPage extends React.Component {

    render() {
        let content = null;
        if (this.props.feed == null || this.props.feed.list == null || this.props.feed.list[this.props.currentUser] == null) {
            this.props.updateFeed();
            content = <ListPlaceholder />;
        } else {
            console.log(this.props.feed.list);
            content = this.props.feed.list.map((element) => (
                <ListItem key={element.id}>
                    <FeedElement layerOpen={this.props.layerOpen} element={element}/>
                </ListItem>))
        }
        return (
            <List>
                {content}
            </List>
        );
    }
}

FeedPage.propTypes = {
    feed: React.PropTypes.object,
    updateFeed: React.PropTypes.func.isRequired,
    currentUser: React.PropTypes.number.isRequired,
    layerOpen: React.PropTypes.func.isRequired,
};

export default FeedPage;