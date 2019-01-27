import React, { Component } from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';

class TopEmployeesChart extends Component {
// constructor(props){
//     super(props)
//     this.state = {
//         topEmployees: {
//             {this.props.topEmployees}[0],
//             {this.props.topEmployees[1],
//             {this.props.topEmployees[2]}}

//         }
//     }
// }
// constructor(){
//     super()
//     this.state= {
//         topEmployees: [
//             {name: "bob", sales: 50},
//             {name: "sue", sales: 100},
//             {name: "tod", sales: 150}]
//     }
//     }


    render() {
const topEmployees=this.props.topEmployees
        return <div className="chart">

            <ResponsiveContainer width='100%'  >
                <BarChart width={600} height={300} data={topEmployees}>
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

export default TopEmployeesChart