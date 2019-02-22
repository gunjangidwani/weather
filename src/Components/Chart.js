import React, {Component} from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
// import { Tooltip } from '@material-ui/core';
class Chart extends Component {
    render() {
        const {wgtMon} = this.props;
        console.log(this.props);
        return (
            
            <div>
              { wgtMon.length > 0 && 
                <LineChart width={800} height={420} data={wgtMon} margin={{ top: 15, right: 20, bottom: 5, left: 10 }}>
                            <Line type="monotone" dataKey="weight" stroke="#8884d8"/>
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                        </LineChart>
              }
                
            </div>
        );
    }
}

export default Chart;