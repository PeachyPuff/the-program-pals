import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import logo from './AesthetikLogo.svg';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import 'draft-js/dist/Draft.css';
//import './App.css';
import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin';
import 'draft-js-side-toolbar-plugin/lib/plugin.css';
import {BoldButton, ItalicButton, UnderlineButton, CodeButton, HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton,} from 'draft-js-buttons';
import { Glyphicon, Button} from 'react-bootstrap';
import MenuBar from './MenuBar';
import { convertToRaw } from 'draft-js';
// import convertToHTML from 'draft-convert';
import draftToHtml from 'draftjs-to-html';
import {stateToHTML} from 'draft-js-export-html';
import styled, { css } from 'styled-components';

  // <Button onClick={this.logState}>rawState</Button>
  //    


  const Btn = styled.button`
    border-radius: 3px;
    padding: 0.25em 1em;
    margin: 0 1em;
    opacity: 0.7;
    background: white;
    color: #18ba69;
    border: 5px solid white;
    margin-left: 90%;

  ${props => props.primary && css`
    background: lightblue;
    color: white;
  `}
`;  

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

export default class EditorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasFocus: false,
      editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});

    this.download = this.download.bind(this);

    // const rawContent =  convertToRaw(this.state.editorState.getCurrentContent());
    // const content = this.state.editorState.getCurrentContent();
    // const contentStateWithEntity = content.createEntity();
    // const entityKey = content.getLastCreatedEntityKey();
    // const entityInstance = content.getEntity(entityKey);

    let html = stateToHTML(this.state.editorState.getCurrentContent());

    this.logState = () => { 
      console.log(stateToHTML(this.state.editorState.getCurrentContent()));
      console.log(this.html);
    };
  }

    download(name, type){
      var file = new Blob([stateToHTML(this.state.editorState.getCurrentContent())], {type: type});
       if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, name);
      else {
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = name;
        document.body.appendChild(a);
        a.click();
      }
    }

    componentDidMount () {
        const script = document.createElement("script");

        script.src = "https://apis.google.com/js/platform.js";
        script.async = true;

        document.body.appendChild(script);
    }


  render() {
    return (
      <div>
      <Btn onClick={()=>this.download("MyAesthetikDraft.html","text/html")}>
        <Glyphicon glyph="save" />
      </Btn>

      <MenuBar />

       
      <div className={`container-root ${this.state.hasFocus ? 'hasFocus' : ''}`}>
     <div style={{marginLeft: "90%", alignContent: "top"}} >
      <div className="g-savetodrive"
            data-src={ `${this.download.url}`}
            data-filename={ `${this.download.name}`}
            data-sitename="Aesthetik">
        </div>
      </div>
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