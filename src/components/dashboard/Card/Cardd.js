import React, { Component } from 'react';
import {Card} from 'react-bootstrap'

export default class Cardd extends Component {
  render() {
    return (
      <div>
          <Card style={{margin:'5px',width:'180px',height:'200px'}}>
              <Card.Body style={{display:'flex',justifyContent:'center',alignItems:'center',flexFlow:'column'}}>
                  <Card.Img variant='top' src={this.props.image} style={{height:'40px',width:'40px'}}/>
                  <Card.Title style={{fontSize:'15px'}}>{this.props.title}</Card.Title>
                  <Card.Text>{this.props.count}</Card.Text>
              </Card.Body>
            </Card> 
     </div>
    );
  }
}
