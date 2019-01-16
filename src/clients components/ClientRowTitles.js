import React, { Component } from 'react'

class ClientRowTitles extends Component {
    render() {
        return (
            <div id="client-row-titles" className="client-row">
                <div>Name</div>
                <div>Surname</div>
                <div>Country</div>
                <div>First Contact</div>
                <div>Email</div>
                <div>Sold</div>
                <div>Owner</div>
            </div>
        )
    }
}

export default ClientRowTitles