import React, { Component } from 'react';
import logo from './AesthetikLogo.svg';
import ReactDOM from 'react-dom';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Aesthetik</h1>
            <p>A Customizable Writing App to Suit Your Creative Needs
            <br />
            <Link to="/editor">
              <Button
                bsSize="large"
                bsStyle="primary">
                Start Creating
              </Button>
              </Link>
            </p>
           </Jumbotron>
         </div> 

    	);
  }	
}