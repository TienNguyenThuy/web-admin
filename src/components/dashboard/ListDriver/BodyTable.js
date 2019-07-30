import React, { Component } from 'react';

export default class BodyTable extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.val1}</td>
                <td>{this.props.val2}</td>
                <td>{this.props.val3}</td>
                <td>{this.props.val4}</td>
            </tr>
        );
    }
}
