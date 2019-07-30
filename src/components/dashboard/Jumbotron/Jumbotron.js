import React, { Component } from 'react';
import {Container,Jumbotron} from 'react-bootstrap';
import './Jum.css'

export default class Jumbotronn extends Component {
  render() {
    return (
        <Jumbotron fluid className="jum">
        <Container>
          <h1>Wazabike Web Admin</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
          </p>
        </Container>
      </Jumbotron>
    );
  }
}
