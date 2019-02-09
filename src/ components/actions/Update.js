import React, { Component } from 'react'

class Update extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateClient = async () => {
        if (this.props.selected === "") {
            alert(`Please enter client name`)
        }
        else {
            this.props.updateClient(this.props.selected._id, this.state)
        }
    }

    declareSold = async () => {
        this.setState({
            sold: true
        })
        this.updateClient()
    }

    render() {
        return (
            <div className="actions-container">
                <div className="action">
                    <div>Transfer ownership to</div>
                    <select name="owner" defaultValue='no-value' value={this.state.owner} onChange={this.handleInputChange}>
                        <option value='no-value' disabled>Select</option>
                        {this.props.owners.map(o => <option key={o}>{o}</option>)}
                    </select>
                    <div className="action-button" onClick={this.updateClient}>TRANSFER</div>
                </div>
                <div className="action">
                    <span>Send email:</span>
                    <select name="emailType" defaultValue='no-value' value={this.state.emailType} onChange={this.handleInputChange}>
                        <option value='no-value' disabled>Select</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                    </select>
                    <span className="action-button" onClick={this.updateClient}>SEND</span>
                </div>
                <div className="action">
                    <span>Declare sale!</span>
                    <span></span>
                    <span className="action-button" id="" onClick={this.declareSold}>DECLARE</span>
                </div>
            </div >)
    }
}

export default Update