import React, { Component } from 'react';
import logo from './AesthetikLogo.svg';
import ReactDOM from 'react-dom';
import './creative-bootstrap-v3/vendor/bootstrap/css/bootstrap.css';
import './creative-bootstrap-v3/css/creative.css';
import { Grid } from 'react-bootstrap';
import Home from './Home';
import Header  from './Header';
import { NavMenu } from './NavMenu';
import Footer from './Footer';
import './App.css';

export default class App extends React.Component {
  
  render() {
    return (
    <div>
    
        <div id="NavHead">
            <Header />
        </div>
        <Home />
      </div>
    );
  }
}
