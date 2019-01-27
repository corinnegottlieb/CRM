import React, { Component } from 'react'
import NewClientsBadge from './badges/NewClientsBadge';
import EmailsSentBadge from './badges/EmailsSentBadge';
import OutstandingClientsBadge from './badges/OutstandingClientsBadge';
import HottestCountry from './badges/HottestCountryBadge';

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