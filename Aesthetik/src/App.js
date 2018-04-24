import React, { Component } from 'react';
import logo from './AesthetikLogo.svg';
import ReactDOM from 'react-dom';
import './creative-bootstrap-v3/vendor/bootstrap/css/bootstrap.css';
//import './creative-bootstrap-v3/css/creative.css';
import { Grid, Row, Col } from 'react-bootstrap';
import Home from './Home';
import './App.css';


export default class App extends React.Component {
  
  render() {
    return (
    <div className="App">

    <Grid>
      <Row>
      <Col xs={12} md={8}>
        
      </Col>
      <Col xs={6} md={4}>
       
      </Col>
      </Row>
      </Grid>
        <div id="NavHead">
           
        </div>
      </div>
    );
  }
}
