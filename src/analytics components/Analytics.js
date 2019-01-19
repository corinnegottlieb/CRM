import React, { Component } from 'react'
import RenderBadges from './RenderBadges';
import RenderCharts from './RenderCharts';
import Axios from 'axios';
import moment from 'moment';


class Analytics extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
        }
    }

    async getData() {
        const response = await Axios.get("http://localhost:5544/clients")
        let owners = this.updateOwners(response.data)
        let newClients = this.newClients(response.data)
        let emailsSent = this.calculateEmailsSent(response.data)
        let outstandingClients = this.calculateOutstandingClients(response.data)
        let hottestCountry = this.calculateHottestCountry(response.data)
        this.setState({
            data: response.data,
            owners,
            newClients,
            emailsSent,
            outstandingClients,
            hottestCountry
        })
    }
    async componentDidMount() {
        await this.getData()
    }

    updateOwners = (data) => {
        let owners = { ...this.state.owners }
        data.forEach(d => {
            if (owners[d.owner]) {
                owners[d.owner]++
            }
            else {
                owners[d.owner] = 1
            }
        })
        return owners
    }

    newClients = (data) => {
        let newClients = 0
        //   let d = new Date()
        // let currentMonth = d.getMonth()
        //    console.log(moment(d).isSame(data[1].firstContact))
        // console.log(currentMonth) 
        console.log(data[0].firstContact)
        // console.log(moment(data[0].firstContact).isSame(moment(), 'month'))
        // console.log((moment(data[10].firstContact).isSame(new Date(), 'month')))
        data.forEach(d => {
            // if(moment(d.firstContact).isSame(moment(), 'month')){
            if (d.firstContact.charAt(6) == 1 && d.firstContact.charAt(5) == 0) {
                // console.log(moment(d.firstContact))
                // console.log(d)
                // console.log(moment())
                newClients++
                // console.log(newClients)
            }
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
        let hottest = Object.keys(countries).reduce(function(a,b){ return countries[a] > countries[b] ? a : b })
        return hottest
    }





    render() {
        return <div>
            <RenderBadges hottestCountry={this.state.hottestCountry} newClients={this.state.newClients} emailsSent={this.state.emailsSent} outstandingClients={this.state.outstandingClients} />
            <RenderCharts />

        </div>
    }
}

export default Analytics