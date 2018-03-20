import React, { Component } from 'react';
import logo from './AesthetikLogo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/react-bootstrap';

import { Navbar,
         Nav,
         NavItem,
         NavDropdown,
         MenuItem
        } from '../node_modules/react-bootstrap';
require:{ '../node_modules/jquery'};
//require:{'../node_modules/bootstrap'};

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
      <Navbar>
          <Navbar.Brand>
            <a href="#brand">Aesthetik</a>
        </Navbar.Brand>
    <Nav>
      <NavItem eventKey={1} href="#">
        About
      </NavItem>
      <NavItem eventKey={2} href="#">
        Features
      </NavItem>
   
    </Nav>

    </Navbar>;
        <div className="App">
        <header className="App-header">
          <h1 className="App-title">AESTHETIK</h1>
        </header>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-intro">
          An atmospheric writing application for your creative needs
        </p>
      </div>
   </div>
    );
  }
}

export default App;
