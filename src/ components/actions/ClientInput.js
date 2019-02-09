import React, { Component } from 'react'

class ClientInput extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
        }
    }

    handleInputChange = async (event) => {
      await  this.setState({
            [event.target.name]: event.target.value
        })
            this.selectClient()
    }

    selectClient = () => {
        let client = this.props.data.find(d => d.name === this.state.name)
        this.props.selectClient(client)
    }

    render() {
        return (
            <div id="update">
                <h2>UPDATE</h2>
                <span>Client:    </span>
                <input placeholder="Client Name" list="names"
                    name="name" value={this.state.name}
                    onChange={this.handleInputChange}></input>
                <datalist id="names">
                    {this.props.data.map(d => 
                    <option key={d.name} value={d.name}></option>)}
                </datalist>
            </div >)
    }
}

export default ClientInput