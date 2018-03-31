import React, { Component } from 'react';
import logo from './AesthetikLogo.svg';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';
import './App.css';
import { Navbar,
         Nav,
         NavItem,
         Button,
         NavDropdown,
         MenuItem
        } from '../node_modules/react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
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