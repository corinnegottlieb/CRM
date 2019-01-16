import React, { Component} from 'react'
import Update from './Update';
import AddClient from './AddClient';

class Actions extends Component{
    render(){
        return (<div id="actionsPage">
<Update owners={this.props.owners} updateData={this.props.updateData}/>
<AddClient addClient={this.props.addClient}/>
            </div>)
    }
}

export default Actions