import React, { Component } from 'react'

class ClientEditPopUp extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            surname: '',
            country: ''
        }
    }

    componentDidMount() {
        let name = this.props.selected.name.split(" ")
        let country = this.props.selected.country
        let id = this.props.selected._id
        this.setState({
            name: name[0],
            surname: name[1],
            country,
            id
        })
    }

    handleTextChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    updateClient = async () => {
        let fullName = this.state.name.concat(` ${this.state.surname}`)
        let client = {
            name: fullName,
            country: this.state.country
        }
        this.props.updateClient(this.state.id, client)
        this.props.toggle()
    }

    render() {

        return (<div className="popup">
            <div className="popupInner">
                <div className="exit-button-popup" onClick={this.props.toggle}>x</div>
                <div className="popup-inputs">
                    <div>Name:</div>
                    <input type= "text" name="name" value={this.state.name} onChange={this.handleTextChange}></input>
                    <div>Surname:</div>
                    <input type="text" name="surname" value={this.state.surname} onChange={this.handleTextChange}></input>
                    <div>Country:</div>
                    <input type="text" name="country" value={this.state.country} onChange={this.handleTextChange}></input>
                </div>
                <div className="update-button-popup" onClick={this.updateClient}>Update</div>
            </div>
        </div>)
    }
}

export default ClientEditPopUp
