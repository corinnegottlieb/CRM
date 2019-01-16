import React, { Component } from 'react'

class ClientRow extends Component {
    editClient=()=>{
        this.props.editClient(this.props.data)
    }

    popup=()=>{
        this.editClient()
        this.props.toggle()
    }
    
    render() {
        const data = this.props.data
        const name = data.name.split(" ")
        // const firstContact = data.firstContact.slice(0,9)
        return (<div className="client-row" onClick={this.popup}>
            <div>{name[0]}</div>
            <div>{name[1]}</div>
            <div>{data.country}</div>
            <div>{data.firstContact}</div>
            <div>{data.emailType}</div>
           { data.sold ? 
            <div>true</div> : 
            <div>false </div>}
            <div>{data.owner}</div>
        </div>)
    }
}

export default ClientRow
