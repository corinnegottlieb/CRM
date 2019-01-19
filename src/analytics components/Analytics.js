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
        this.setState({
            data: response.data,
            owners,
            newClients
        })
    }
    async componentDidMount() {
        await this.getData()
    }

    updateOwners = (data) => {
        let owners = { ...this.state.owners }
        data.forEach(d => {
            if (owners[d.owner]) {
                owners[d.owner] = d.owner + 1
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


    render() {
        return <div>
            <RenderBadges newClients={this.state.newClients} />
            <RenderCharts />

        </div>
    }
}

export default Analytics