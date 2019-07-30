import React, { Component } from 'react';

export default class TabContent extends Component {
  render() {
    return (
      <div> {this.props.content} </div>
    );
  }
}
