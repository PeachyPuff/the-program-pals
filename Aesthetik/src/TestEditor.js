import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin';
import './App.css';

// Creates an Instance. At this step, a configuration object can be passed in
// as an argument.
const sideToolbarPlugin = createSideToolbarPlugin();

// The Editor accepts an array of plugins. In this case, only the sideToolbarPlugin
// is passed in, although it is possible to pass in multiple plugins.


export default class MyEditor extends React.Component{
	constructor(props) {
    super(props);
    this.state = {editorState};
    this.onChange = (editorState) => this.setState({editorState});
    }
    render() {
    	return (
            <div>
    		<Editor
    			editorState={editorState}
    			onChange={onChange}
    			plugins={[sideToolbarPlugin]}
  			/>
            </div>
    		)
    }

}

// const MyEditor = ({ editorState, onChange }) => (
//   <div className='editor'>
//   <Editor
//     editorState={editorState}
//     onChange={onChange}
//     plugins={[sideToolbarPlugin]}
//   />
//   </div>
// );

// export default MyEditor;