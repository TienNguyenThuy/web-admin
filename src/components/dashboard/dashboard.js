import React, { Component } from 'react';
import Tabs from './Tabs/Tabs';
import Jumbotronn from './Jumbotron/Jumbotron';
import Footer from './Footer/Footer';
import { Container } from 'react-bootstrap'


export default class Dashboard extends Component {
  render() {
    return (
      <Container>
        <div style={{ margin: 0, padding: 0,backgroundColor: '#fff', }}><Jumbotronn /> <Tabs /> <div style={{ margin: '20%' }}></div><hr/>
          <div style={{ background: '#007E33', color: '#fff' }}>
            <Footer />
          </div>
        </div>
      </Container>
    );
  }
}
