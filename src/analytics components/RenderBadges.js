import React, { Component } from 'react'
import NewClientsBadge from './NewClientsBadge';
import EmailsSentBadge from './EmailsSentBadge';
import OutstandingClientsBadge from './OutstandingClientsBadge';
import HottestCountry from './HottestCountryBadge';

class RenderBadges extends Component {
    render() {
        return (<div id="badges">
            <NewClientsBadge newClients={this.props.newClients} />
            <EmailsSentBadge emailsSent={this.props.emailsSent} />
            <OutstandingClientsBadge outstandingClients={this.props.outstandingClients} />
            <HottestCountry hottestCountry={this.props.hottestCountry} />
        </div>)
    }
}

export default RenderBadges