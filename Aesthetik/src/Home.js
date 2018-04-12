import React, { Component } from 'react';
import logo from './AesthetikLogo.svg';
import background from './happyBackground1.svg';
import button from './bigButton.svg';
import ReactDOM from 'react-dom';
import { Jumbotron, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//<img src={logo} className="App-logo" alt="logo" />
//<Image src={require("bigButton.svg")} rounded />

export default class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <h1 >Aesthetik</h1>
            <p className="App-intro">A Customizable Writing App to Suit Your Creative Needs
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