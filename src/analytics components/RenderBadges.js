import React, { Component } from 'react'
import NewClientsBadge from './NewClientsBadge';
import EmailsSentBadge from './EmailsSentBadge';

class RenderBadges extends Component{
render(){
    return(<div id="badges">
        <NewClientsBadge newClients={this.props.newClients}/>
        <EmailsSentBadge />

    </div>)
}
}

export default RenderBadges