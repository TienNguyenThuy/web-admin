import React, { Component } from 'react';

class BodyTableTrip extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.val0}</td>
                <td>{this.props.val1}</td>
                <td>{this.props.val2}</td>
                <td>{this.props.val3}</td>
                <td>{this.props.val4}</td>
                <td>{this.props.val5}</td>
                <td>{this.props.val6}</td>
                <td>{this.props.val7}</td>
            </tr>
        );
    }
}

export default BodyTableTrip;