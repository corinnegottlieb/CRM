import React, { Component } from 'react';
import './Clients.css';
import './Analytics.css'
import './App.css';
import './Actions.css'
import Axios from 'axios';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Clients from './clients components/Clients';
import Actions from './actions components/Actions';
import Analytics from './analytics components/Analytics';
import Home from './app components/Home';
import NavBar from './app components/NavBar';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      selected: {},
      owners: {}
    }
  }

  async getData() {
    const response = await Axios.get("http://localhost:5544/clients")
    let owners = this.updateOwners(response.data)
    this.setState({
      data: response.data,
      owners
    })
  }

  async componentDidMount() {
    await this.getData()
  }

  addClient = async (client) => {
    await Axios.post(`http://localhost:5544/client`, client)
    this.getData()
  }


  editClient = (client) => {
    this.setState({
      selected: client
    })
  }

  updateClient = async (id, data) => {
    let response = await Axios.put(`http://localhost:5544/client/${id}`, data)
    console.log(response)
    this.getData()
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

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar></NavBar>
          <Route path="/" exact component={Home} />
          <Route path="/clients" exact render={() => <Clients selected={this.state.selected} editClient={this.editClient} data={this.state.data} updateClient={this.updateClient} />} />
          <Route path="/actions" exact render={() => <Actions addClient={this.addClient} owners={this.state.owners} selected={this.state.selected} editClient={this.editClient} data={this.state.data} updateClient={this.updateClient}/>} />
          <Route path="/analytics" exact component={Analytics} />
        </div>
      </Router>
    );
  }
}

export default App;
