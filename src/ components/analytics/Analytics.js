import React, { Component } from 'react'
import RenderBadges from './RenderBadges';
import RenderCharts from './RenderCharts';
import Axios from 'axios';


class Analytics extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
        }
    }

    async getAnalyticsData() {
        const response = await Axios.get("/clients")
        let topEmployees = this.calculateTopEmployees(response.data)
        let newClients = this.calculateNewClients(response.data)
        let emailsSent = this.calculateEmailsSent(response.data)
        let outstandingClients = this.calculateOutstandingClients(response.data)
        let countries = this.sortByCountries(response.data)
        let hottestCountry = this.calculateHottestCountry(response.data)
        this.setState({
            data: response.data,
            topEmployees,
            newClients,
            emailsSent,
            outstandingClients,
            hottestCountry,
            countries
        })
    }
    async componentDidMount() {
        await this.getAnalyticsData()
    }

    calculateNewClients = (data) => {
        let newClients = 0
        let current = new Date().getMonth()
        data.forEach(d => {
            let date = new Date(d.firstContact).getMonth()
            if (date === current) {
                newClients++   }
        })
        return newClients
    }

    calculateEmailsSent = (data) => {
        let sentEmails = data.filter(d => d.emailType !== null)
        let count = sentEmails.length
        return count
    }

    calculateOutstandingClients = (data) => {
        let outstandingClients = data.filter(d => d.sold === false)
        let count = outstandingClients.length
        return count
    }

    calculateHottestCountry = (data) => {
        let countries = {}
        data.forEach(d => {
            if (countries[d.country]) {
                countries[d.country]++
            }
            else {
                countries[d.country] = 1
            }
        })
        let hottest = Object.keys(countries).reduce(function (a, b) { return countries[a] > countries[b] ? a : b })
        return hottest
    }

    sortByCountries = (data, ) => {
        let countries = {}
        data.filter(d => d.sold === true).forEach(d => {
            if (countries[d.country]) {
                countries[d.country]++
            }
            else {
                countries[d.country] = 1
            }
        })
        let groupedCountries = Object.keys(countries).map(c => { return { name: c, sales: countries[c] } })
        return groupedCountries
    }

    calculateTopEmployees = (data) => {
        let owners = { ...this.state.owners }
        data.filter(d => d.sold === true).forEach(d => {
            if (owners[d.owner]) {
                owners[d.owner]++
            }
            else {
                owners[d.owner] = 1
            }
        })
        let keysSorted = Object.keys(owners).sort(function (a, b) { return owners[a] - owners[b] })
        .map(key => { return { name: key, sales: owners[key] } }).reverse()
        keysSorted.splice(3)
        return keysSorted
    }


    render() {
        return <div>
            <RenderBadges hottestCountry={this.state.hottestCountry} newClients={this.state.newClients} emailsSent={this.state.emailsSent} outstandingClients={this.state.outstandingClients} />
            <RenderCharts countries={this.state.countries} topEmployees={this.state.topEmployees} />

        </div>
    }
}

export default Analytics