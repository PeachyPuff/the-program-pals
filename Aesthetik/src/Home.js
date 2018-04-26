import React, { Component } from 'react';
import logo from './AesthetikLogo.svg';
import button from './bigButton.svg';
import ReactDOM from 'react-dom';
import { Jumbotron, Button, Image, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//<img src={logo} className="App-logo" alt="logo" />
//<Image src={require("bigButton.svg")} rounded />
import FormattingBar from './FormattingBar';
import Header  from './Header';
import './App.css';
import Footer from "./Footer"

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
       <Header />
        <Jumbotron className="jumbotronStyle vertical-center">
        <div >
          <h1>a e s t h e t i  k .</h1>
            <p>A Customizable Writing App to Suit Your Creative Needs
            <br />
            <br />
        
              <Button
                bsSize="large"
                bsStyle="primary"
                onClick={this.handleShow}>
                Start Creating
              </Button>
           
            </p>
            </div>
           </Jumbotron>

          <Modal className=".modal-container" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Get Started</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>Login </h2>
            <Link to="login"> <h4> Login With Google. </h4> </Link>

            <hr />

             <h3>Or Start Writing Without Login</h3>
             <Link to="editor"><h4>Go To Writing Environment</h4></Link>
           
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
  <Footer />
         </div> 

    	);
  }	
}