import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Editor, EditorState } from 'draft-js';

interface MyEditorProps {
   
}

class OldEditor extends React.Component<MyEditorProps, any> {
    constructor(props: MyEditorProps) {
        super(props);

        this.state = { editorState: EditorState.createEmpty() };
    }
    handleChange(e: EditorState) {
        this.setState({ editorState: e });
    }
    render() {
        return (
            <Editor editorState={this.state.editorState} onChange={e => this.handleChange(e)} />
        );
    }
}

ReactDOM.render(
    <OldEditor />,
    document.getElementById('editor'),
);

export { OldEditor }