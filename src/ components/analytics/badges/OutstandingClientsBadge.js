import React, { Component } from 'react'

class OutstandingClientsBadge extends Component {

    render() {

        return <div className="badge">
            <div className="analytics-icon outstandingClients-icon"><i className="fas fa-user-circle"></i></div>
            <div className="analytics-number">{this.props.outstandingClients}</div>
            <div className="analytics-description">Outstanding Clients</div>
        </div>

    }
}

export default OutstandingClientsBadge