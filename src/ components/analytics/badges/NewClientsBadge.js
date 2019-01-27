import React, { Component } from 'react'

class NewClientsBadge extends Component {
    render() {
        let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let current = new Date().getMonth()

        return <div className="badge">
            <div className="analytics-icon newClients-icon"><i className="fas fa-chart-line"></i></div>
            <div className="analytics-number">{this.props.newClients}</div>
            <div className="analytics-description">New {month[current]} Clients</div>
        </div>

    }
}

export default NewClientsBadge