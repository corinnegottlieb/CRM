import React, { Component } from 'react'

class AddClient extends Component {
    constructor(){
        super()
        this.state={
            name:``,
            surname:``,
            country:``
        }
    }

    handleTextChange=(event) =>{
        this.setState({
     [event.target.name]: event.target.value
        })
      }
      addClient = async()=>{
this.props.addClient(this.state)
      }
    render() {
        return (
            <div id="addClient">
            <h2>ADD CLIENT</h2>
            <div>First name:</div>
            <input type="text" name="name" value={this.state.name} onChange={this.handleTextChange}></input>
            <div>Surname:</div>
            <input type="text" name="surname" value={this.state.surname} onChange={this.handleTextChange}></input>
            <div>Country:</div>
            <input type="text" name="country" value={this.state.country} onChange={this.handleTextChange}></input>
            <div>Owner:</div>
            <input></input>
            <button onClick={this.addClient}>ADD NEW CLIENT</button>
            </div >)
    }
}

export default AddClient