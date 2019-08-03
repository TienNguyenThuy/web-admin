import React, { Component } from 'react';

class HeaderTableTrip extends Component {
    render() {
        return (
            <tr>
                <th>{this.props.elm0}</th>
                <th>{this.props.elm1}</th>
                <th>{this.props.elm2}</th>
                <th>{this.props.elm3}</th>
                <th>{this.props.elm4}</th>
                <th>{this.props.elm5}</th>
                <th>{this.props.elm6}</th>
                <th>{this.props.elm7}</th>
            </tr>
        );
    }
}

export default HeaderTableTrip;