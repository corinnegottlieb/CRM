import React, { Component } from 'react'
import Update from './Update';
import AddClient from './AddClient';
import ClientInput from './ClientInput';
import Axios from 'axios';


class Actions extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            owners: [],
            selected: '',
        }
    }
    async getData() {
        const response = await Axios.get('/clients')
        let owners = this.updateOwners(response.data)
        this.setState({
            data: response.data,
            owners
        })
    }

    async componentDidMount() {
        await this.getData()
    }

    updateOwners = (data) => {
        let owners = { ...this.state.owners }
        owners = new Set(data.map(d=>d.owner))
        return [...owners]
    }

    selectClient = (client) => {
        this.setState({
            selected: client
        })
    }
    updateClient = async (id, data) => {
        await Axios.put(`/client/${id}`, data)
    }

    addNewClient = async (client) => {
        await Axios.post(`/client`, client)
    }



    render() {
        return (<div id="actionsPage">
            <ClientInput data={this.state.data} selectClient={this.selectClient} />
            <Update owners={this.state.owners} selected={this.state.selected} updateClient={this.updateClient} />
            <AddClient addNewClient={this.addNewClient} />
        </div>)
    }
}

export default Actions