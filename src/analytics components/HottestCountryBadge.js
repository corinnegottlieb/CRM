import React, { Component } from 'react'

class HottestCountry extends Component {

    render() {

        return <div className="badge">
            <div className="analytics-icon hottestCountry-icon"><i className="fas fa-globe-americas"></i></div>
            <div className="analytics-number">{this.props.hottestCountry}</div>
            <div className="analytics-description">Hottest Country</div>
        </div>

    }
}

export default HottestCountry