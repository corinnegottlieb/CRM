import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class NavBar extends Component {
    render() {
        const links = [
            { path: "/clients", text: 'Clients' },
            { path: "/actions", text: 'Actions' },
            { path: "/analytics", text: 'Analytics' }
        ]
        return (
            <div className="nav-bar">
                {links.map(link => (
                    <Link to={link.path} 
                          key={link.path} 
                          className={`nav-button ${document.location.pathname === link.path ? 
                            'active' : ''}`}>{link.text}</Link>
                ))}
            </div>
        )
    }
}

export default NavBar