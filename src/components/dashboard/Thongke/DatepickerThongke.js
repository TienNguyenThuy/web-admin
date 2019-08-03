import React, { Component } from 'react';
import DatePicker from "react-datepicker";

class DatepickerThongke extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return (
            <div>
                
                <hr></hr>

                <text style={{ marginTop: '20%', fontSize: '20px', fontWeight:'bold'  }}> Thời gian thống kê: </text>
                <DatePicker
                style={{margin:'100px'}}

                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />

            </div>

        );
    }
}

export default DatepickerThongke;