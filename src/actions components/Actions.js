import React, { Component} from 'react'
import Update from './Update';
import AddClient from './AddClient';
import ClientInput from './ClientInput';

class Actions extends Component{
    constructor() {
        super()
        this.state = {
            selected: '',
        }
    }

//     componentDidMount() {
//         this.setState({
//  selected
//             })
//         }

    editClient = (client) => {
        this.setState({
          selected: client
        })
      }
    
    render(){
        return (<div id="actionsPage">
<ClientInput data={this.props.data} editClient={this.editClient} />
<Update owners={this.props.owners} selected={this.state.selected} updateClient={this.props.updateClient}/>
<AddClient addClient={this.props.addClient}/>
            </div>)
    }
}

export default Actions