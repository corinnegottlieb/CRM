import React, { Component } from 'react'

class EmailsSentBadge extends Component {

    render() {

        return <div className="badge">
            <div className="analytics-icon emailsSent-icon"><i class="fas fa-envelope"></i></div>
            <div className="analytics-number">500</div>
            <div className="analytics-description">Emails Sent</div>
        </div>

    }
}

export default EmailsSentBadge