import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <Link to="/clients"
                id="home">
                Welcome to the CRM
            </Link>
        )
    }
}

export default Home