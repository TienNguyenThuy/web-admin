import React, { Component } from 'react';

export default class HeaderTable extends Component {
    render() {
        return (
            <tr>
                <th>{this.props.elm1}</th>
                <th>{this.props.elm2}</th>
                <th>{this.props.elm3}</th>
                <th>{this.props.elm4}</th>
            </tr>
        );
    }
}
