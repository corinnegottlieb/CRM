import React, { Component } from 'react';
import './Clients.css';
import './Analytics.css'
import './App.css';
import './Actions.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Clients from './ components/clients/Clients';
import Actions from './ components/actions/Actions';
import NavBar from './ components/app/NavBar';
import Analytics from './ components/analytics/Analytics';
import Home from './ components/app/Home';


class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
          <NavBar></NavBar>
          <Route path="/" exact component={Home} />
          <Route path="/clients" exact component = {Clients} />
          <Route path="/actions" exact component = {Actions} />
          <Route path="/analytics" exact component={Analytics} />
        </div>
      </Router>
    );
  }
}

export default App;
