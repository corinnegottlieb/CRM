import React, { Component } from 'react'

class NewClientsBadge extends Component {

    render() {

        return <div className="badge">
            <div className="analytics-icon newClients-icon"><i className="fas fa-chart-line"></i></div>
            <div className="analytics-number">{this.props.newClients}</div>
            <div className="analytics-description">New January Clients</div>
        </div>

    }
}

export default NewClientsBadge