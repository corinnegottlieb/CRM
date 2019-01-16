import React, { Component } from 'react'

class Update extends Component {
    constructor(){
        super()
        this.super = {
name: '',
owner: '',
email: '',

        }
    }
    render() {
        const owners = this.props.owners
        return (
            <div id="update">
                <h2>UPDATE</h2>
                <span>Client:    </span>
                <input type="text"></input>
            <div className="action">
                <div>Transfer ownership to</div>
                <select>
                {Object.keys(owners).map(o=><option key={o}>{o}</option>)}
                </select>
                <button>TRANSFER</button>
            </div>
            <div className="action">
                <div>Send email:</div>
                <select>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                </select>
                <button>SEND</button>
            </div>
            <div>Declare sale!</div>
            <button>DECLARE</button>
            </div >)
    }
}

export default Update