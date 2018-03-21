import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';
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
require:{'../node_modules/bootstrap'};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
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
    
      <div id= "content">
        <h1>Aesthetik</h1>
        <div className= "editor">
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
          />
        </div>
      </div>
      </div>
    );
  }
}

//export default App;
