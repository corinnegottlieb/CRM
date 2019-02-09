import React, { Component } from 'react'
import Moment from 'react-moment';

class ClientRow extends Component {
    selectClient = () => {
        this.props.selectClient(this.props.data)
    }

    popup = () => {
        this.selectClient()
        this.props.toggle()
    }

    render() {
        const data = this.props.data
        const name = data.name.split(" ")
        const firstContact = data.firstContact
        return (
            <div className="client-row" onClick={this.popup}>
                <div>{name[0]}</div>
                <div>{name[1]}</div>
                <div>{data.country}</div>
                <Moment format="MM/DD/YYYY">{firstContact}</Moment>
                {!data.emailType ?
                    <div>-</div> :
                    <div>{data.emailType}</div>}
                {data.sold ?
                    <div><i className="fas fa-check"></i></div> :
                    <div>-</div>}
                <div>{data.owner}</div>
            </div>)
    }
}

export default ClientRow
