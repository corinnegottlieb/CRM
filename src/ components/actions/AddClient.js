import React, { Component } from 'react'

class AddClient extends Component {
    constructor() {
        super()
        this.state = {
            name: ``,
            surname: ``,
            country: ``
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    addNewClient = async () => {
        let fullName = this.state.name + ` ` + this.state.surname
        let newClient = {
            name: fullName,
            country: this.state.country
        }
        this.props.addNewClient(newClient)
    }

    render() {
        return (
            <div id="addClient">
                <h2>ADD CLIENT</h2>
                <div className="addClient-container">
                    <div>First name:</div>
                    <input type="text" name="name" value={this.state.name}
                        onChange={this.handleInputChange}></input>
                    <div>Surname:</div>
                    <input type="text" name="surname" value={this.state.surname}
                        onChange={this.handleInputChange}></input>
                    <div>Country:</div>
                    <input type="text" name="country" value={this.state.country}
                        onChange={this.handleInputChange}></input>
                    <div>Owner:</div>
                    <input></input>
                </div>
                <div className="addClient-button" onClick={this.addNewClient}>
                    ADD NEW CLIENT</div>
            </div >)
    }
}

export default AddClient