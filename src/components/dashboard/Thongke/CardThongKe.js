import React, { Component } from 'react';
import {Card} from 'react-bootstrap'

class CardThongKe extends Component {
    render() {
        return (
            <div>
                <Card style={{margin:'5px',width:'250px',height:'319px'}}>
                    <Card.Body style={{display:'flex',justifyContent:'center',alignItems:'center',flexFlow:'column'}}>
                        <Card.Img variant='top' src={this.props.image} style={{height:'50px',width:'50px'}}/>
                        <Card.Title style={{fontSize:'23px'}}>{this.props.title}</Card.Title>
                        <Card.Text style={{fontSize:'23px'}}>{this.props.count}</Card.Text>
                    </Card.Body>
                  </Card> 
                 
           </div>
          );
    }
}

export default CardThongKe;