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
import FormattingBar from './FormattingBar'
import { Modal, Button} from 'react-bootstrap';
import { StyleSheet, css } from 'aphrodite';
import MenuBar from './MenuBar';
import { convertToRaw } from 'draft-js';
// import convertToHTML from 'draft-convert';
import draftToHtml from 'draftjs-to-html';
import {stateToHTML} from 'draft-js-export-html';
import {Howl,Howler} from 'howler';
//import SoundJS from 'soundjs';
import ReactHowler from 'react-howler';
import * as Tone from "tone";
import BackgroundAudio from './BackgroundAudio'

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
    //this.sound = new Audio();

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

    //const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  }


    download(name, type){
      var file = new Blob([stateToHTML(this.state.editorState.getCurrentContent())], {type: type});
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = name;
        document.body.appendChild(a);
        a.click();
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
      <Button onClick={()=>this.download("MyAesthetikDraft.html","text/html")}>Save</Button>
      <Button onClick={this.logState}>rawState</Button>
       <div className="g-savetodrive"
            data-src="MyDick.png"
            data-filename="My Statement.pdf"
            data-sitename="Aesthetik">
        </div>

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
      <h1 className='title'>ReactHowler.js</h1>
      <div className='BackgroundAudio'>
      <section>
        <BackgroundAudio/>
        <a href='https://github.com/thangngoc89/react-howler' className='github-btn'/>
      </section>
      <section>
        <p> className = 'BackgroundAudio'</p>
        <BackgroundAudio/>
      <a href={`https://github.com/PeachyPuff/the-program-pals/blob/Audio/Aesthetik/src/BackgroundAudio.js`} className='BackgroundAudio' source/>
      </section>
      <section>
            <h1>Global Howler Object</h1>
            <p>usingWebAudio: {(window.Howler.usingWebAudio) ? 'true' : 'false'}</p>
            <pre>window.Howler.usingWebAudio</pre>
          </section>
          </div>
   </div>
    );
  }
}