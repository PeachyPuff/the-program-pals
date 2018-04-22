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
      editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }


  render() {
    return (
      <div>
      <MenuBar />
       
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