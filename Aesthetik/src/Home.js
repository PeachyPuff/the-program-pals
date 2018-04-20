import React, { Component } from 'react';
import logo from './AesthetikLogo.svg';
import background from './happyBackground1.svg';
import button from './bigButton.svg';
import ReactDOM from 'react-dom';
import { Jumbotron, Button, Image, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//<img src={logo} className="App-logo" alt="logo" />
//<Image src={require("bigButton.svg")} rounded />

export default class Home extends React.Component {
    constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="App">
        <Jumbotron className="jumbotronStyle">
          <h1 className >a e s t h e t i  k .</h1>
            <p className="App-header">A Customizable Writing App to Suit Your Creative Needs
            <br />
            <br />
            
              <Button   
                bsSize="large"
                bsStyle="primary"
                onClick={this.handleShow}>
                Start Creating
              </Button>
              
            </p>
           </Jumbotron>

           <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Get Started</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>Login or Sign Up</h3>
            <Link to="login"> <h5> Login</h5> </Link>

            <hr />

            <h5>Sign Up (It's Free!)</h5>
            
             <hr />

             <h3>Or Start Writing Without Login</h3>
             <Link to="editor"><h5>Go To Environment Builder</h5></Link>
           
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>

         </div> 

    	);
  }	
}