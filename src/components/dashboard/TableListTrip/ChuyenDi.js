import React, { Component } from 'react';
import CardThongKe from '../Thongke/CardThongKe';
import DatepickerThongke from '../Thongke/DatepickerThongke';
// import TableTrip from './ListTrip'

class ChuyenDi extends Component {
    render() {
        return (
            <div>
                <CardThongKe/>
                <DatepickerThongke/>
                <hr/>
             {/* <ListTrip/> */}
            </div>
        );
    }
}

export default ChuyenDi;