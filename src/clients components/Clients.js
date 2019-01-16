import React, { Component } from 'react'
import ClientRow from './ClientRow';
import ClientRowTitles from './ClientRowTitles';
import ClientEdit from './ClientEdit';

class Clients extends Component {
    constructor(){
        super()
        this.state={
            searchText: '',
            searchCategory: 'name',
            showPopup: false,
            selectedID: null
        }
    }
    handleTextChange=(event) =>{
        this.setState({
     [event.target.name]: event.target.value
        })
      }

    togglePopup=()=>{
          this.setState({
              showPopup: !this.state.showPopup
          })
      }
    

    render() {
        const data = this.props.data
        return (<div id="clients-table">
        <input name="searchText" value={this.state.searchText} onChange={this.handleTextChange} type="text"></input>
        <select name="searchCategory" value={this.state.searchCategory} onChange={this.handleTextChange}>
            <option value="name">Name</option>
            {/* <option value="surname">Surname</option> */}
            <option value="country">Country</option>
            <option value="firstContact">First Contact</option>
            {/* <option value="email">Email</option> */}
            {/* <option value="sold">Sold</option> */}
            <option value="owner">Owner</option>
        </select>
            <ClientRowTitles />
            {data.filter(d => d[this.state.searchCategory].toLowerCase().includes(this.state.searchText.toLowerCase())).
            map(d=> <ClientRow toggle={this.togglePopup} updateClient={this.updateClient} editClient={this.props.editClient} key={d.name} data={d}selected={this.props.selected} />)}
       {this.state.showPopup ?
       <ClientEdit selected={this.props.selected} updateClient={this.props.updateClient} toggle={this.togglePopup} />
       :null}
        </div>)
    }
}

export default Clients