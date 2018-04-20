import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import logo from './AesthetikLogo.svg';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import 'draft-js/dist/Draft.css';
import './App.css';
import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin';
import 'draft-js-side-toolbar-plugin/lib/plugin.css';
// import ButtonGroup from 'react-bootstrap';
import {BoldButton, ItalicButton, UnderlineButton} from 'draft-js-buttons';

const sideToolbarPlugin = createSideToolbarPlugin();
const { SideToolbar } = sideToolbarPlugin;
const plugins = [sideToolbarPlugin];

export default class EditorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasFocus: false,
      editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
  render() {
    return (
         <div className={`container-root ${this.state.hasFocus ? 'hasFocus' : ''}`}>
      
      <div id= "content">
        <h1 className="EditorTitle" contentEditable="true">Your Story</h1>
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
    );
  }
}