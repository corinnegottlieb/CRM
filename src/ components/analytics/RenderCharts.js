import React, { Component } from 'react'
import TopEmployeesChart from './charts/TopEmployeesChart';
import SalesByCountryChart from './charts/SalesByCountryChart';

class RenderCharts extends Component{
render(){
    return <div>
        <TopEmployeesChart topEmployees={this.props.topEmployees} />
        <SalesByCountryChart countries={this.props.countries} />
    </div>
}
}

export default RenderCharts