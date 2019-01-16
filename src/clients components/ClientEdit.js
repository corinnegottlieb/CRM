import React, { Component } from 'react'

class ClientEdit extends Component {
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
        console.log(this.state.id, this.state)
        this.props.updateClient(this.state.id, this.state)
        
    }

    render() {

        return (<div className="popup">
            <div className="popupInner">
                <button onClick={this.props.toggle}>Exit Edit</button>
                <input name="name" value={this.state.name} onChange={this.handleTextChange}></input>
                <input name="surname" value={this.state.surname} onChange={this.handleTextChange}></input>
                <input name="country" value={this.state.country} onChange={this.handleTextChange}></input>
                <button onClick={this.updateClient}>Update</button>
            </div>
        </div>)
    }
}

export default ClientEdit
