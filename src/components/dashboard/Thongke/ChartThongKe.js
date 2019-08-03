import React, { Component } from 'react';
import Chart from '../Chart/Chart';

class ChartThongKe extends Component {
    render() {
        const ChartTK = {
            width: '80%',
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px soid',
            marginTop: '20%'
        }
        return (
            <div style={ChartTK}>
                
                <Chart />
            </div>
        );
    }
}

export default ChartThongKe;