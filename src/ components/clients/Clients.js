import React, { Component } from 'react'
import ClientRow from './ClientRow';
import ClientRowTitles from './ClientRowTitles';
import ClientEdit from './ClientEditPopup';
import Axios from 'axios';

class Clients extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            selected: {},
            owners: {},
            searchText: '',
            searchCategory: 'name',
            showPopup: false,
        }
    }
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    togglePopup = () => {
        this.setState({
            showPopup: !this.state.showPopup
        })
    }
    async getClientData() {
        const response = await Axios.get("http://localhost:5544/clients")
        this.setState({
            data: response.data,
        })
    }

    async componentDidMount() {
        await this.getClientData()
    }

    selectClient = (client) => {
        this.setState({
            selected: client
        })
    }
    updateClient = async (id, data) => {
        await Axios.put(`http://localhost:5544/client/${id}`, data)
        // update locally instead of retreving entire database find index 
        this.getClientData()
    }

    


    render() {
        const data = this.state.data
        return (<div id="clients-table">
            <div className="clients-search">
                <input placeholder="Search" name="searchText" value={this.state.searchText} onChange={this.handleInputChange} type="text"></input>
                <select className="client-category" name="searchCategory" value={this.state.searchCategory} onChange={this.handleInputChange}>
                    <option value="name">Name</option>
                    {/* <option value="surname">Surname</option> */}
                    <option value="country">Country</option>
                    {/* <option value="firstContact">First Contact</option> */}
                    {/* <option value="email">Email</option> */}
                    {/* <option value="sold">Sold</option> */}
                    <option value="owner">Owner</option>
                </select>
            </div>
            <ClientRowTitles />
            <div className="rows-container">
                {data.filter(d => d[this.state.searchCategory].toLowerCase().includes(this.state.searchText.toLowerCase()))
                    .map(d => <ClientRow toggle={this.togglePopup} updateClient={this.updateClient} selectClient={this.selectClient} key={d.name} data={d} selected={this.state.selected} />)}
                {this.state.showPopup ?
                    <ClientEdit selected={this.state.selected} updateClient={this.updateClient} toggle={this.togglePopup} />
                    : null}
            </div>
        </div>)
    }
}

export default Clients