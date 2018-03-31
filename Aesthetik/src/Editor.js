import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import logo from './AesthetikLogo.svg';
import {Editor, EditorState} from 'draft-js';
import './App.css';

export default class EditorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
  render() {
    return (
         <div className="container-fluid">
      
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