import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import logo from './AesthetikLogo.svg';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import 'draft-js/dist/Draft.css';
//import './App.css';
import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin';
import 'draft-js-side-toolbar-plugin/lib/plugin.css';
import  {ButtonGroup} from 'react-bootstrap';
import {BoldButton, ItalicButton, UnderlineButton, CodeButton, HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton,} from 'draft-js-buttons';
import FormattingBar from './FormattingBar'
import { Modal, Button} from 'react-bootstrap';
import { StyleSheet, css } from 'aphrodite';
import Background from './happyBackground1.svg';
import MenuBar from './MenuBar';
import Header from './Header';

const sideToolbarPlugin = createSideToolbarPlugin({
  structure: [
    BoldButton,
    ItalicButton,
    UnderlineButton,
    CodeButton,
    HeadlineOneButton,
    HeadlineTwoButton,
    HeadlineThreeButton]});
const { SideToolbar } = sideToolbarPlugin;
const plugins = [sideToolbarPlugin];

//onClick={()=>this.setBackground(Background)}>Theme

// componentDidMount () {
//         const script = document.createElement("script");

//         script.src = "https://apis.google.com/js/platform.js";
//         script.async = true;

//         document.body.appendChild(script);
//     }
//{this.state.renderHeader ? <Header componentWillUnmount={this.handleChildUnmount} /> : null}

export default class EditorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasFocus: false,
      show: false,
      editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
    this.setBackground = this.setBackground.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  setBackground(background){
    document.body.style.backgroundImage= "url("+ background + ")";
    document.body.style.backgroundSize= "cover";
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
    console.log("pressed");
  }


  

  render() {
    return (
      <div>
      
       
         <ButtonGroup >
          <Button className='MainButton' onClick={this.handleShow}>Theme </Button>
          <Button className='MainButton'>Background</Button>
          <Button className='MainButton'>Tik</Button>
        </ButtonGroup>;

         <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Choose Your Aesthetik</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>e n e r g e t i c.</h2>
            <Button>Prismatic Sunflower</Button>
            <Button>Clear Blue</Button> 
            <hr />
            <h2>p e a c e f u l. </h2>
            <Button>Peaceful</Button>
             <hr />
            <h2>a u s t e r e. </h2>
            <Button>Austere</Button> 
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>

      <div className={`container-root ${this.state.hasFocus ? 'hasFocus' : ''}`}>
      
      <div id= "content">
        <h1 className="EditorTitle" contentEditable="true">Title</h1>
        <div className= "editor">
          <Editor
            onFocus={() => this.setState({ hasFocus: true })}
            onBlur={() => this.setState({ hasFocus: false })}
            placeholder="Start Writing"
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={[sideToolbarPlugin]}
          />
        </div>
      </div>
       <SideToolbar />
      
      </div>
   </div>
    );
  }
}