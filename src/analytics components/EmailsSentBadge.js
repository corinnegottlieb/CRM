import React, { Component } from 'react'

class EmailsSentBadge extends Component {

    render() {

        return <div className="badge">
            <div className="analytics-icon emailsSent-icon"><i className="fas fa-envelope"></i></div>
            <div className="analytics-number">{this.props.emailsSent}</div>
            <div className="analytics-description">Emails Sent</div>
        </div>

    }
}

export default EmailsSentBadge