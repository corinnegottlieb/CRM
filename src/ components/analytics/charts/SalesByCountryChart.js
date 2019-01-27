import React, { Component } from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';

class SalesByCountryChart extends Component {

    render() {
const countries=this.props.countries
        return <div className="chart">

            <ResponsiveContainer width='100%'  >
                <BarChart width={600} height={300} data={countries}>
                    <YAxis />
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>

    }
}

export default SalesByCountryChart