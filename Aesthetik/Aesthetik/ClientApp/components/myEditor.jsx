import React from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState } from 'draft-js';
import { RouteComponentProps } from 'react-router';

//export class MyEditorProps extends RouteComponentProps<any> { }


export class  MyEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };
        this.onChange = (editorState) => this.setState({ editorState });
    }
    render() {
        return (
            <div id="content">
                <h1>Aesthetik Editor</h1>
                <div className="editor">
                    <Editor editorState={this.state.editorState} onChange={this.onChange} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <MyEditor />,
    document.getElementById('container')
);