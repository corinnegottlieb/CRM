import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (<div id="home">
            <Link to="/clients" id="welcome-button"
                >
                Welcome to the CRM
            </Link>
            </div>
        )
    }
}

export default Home