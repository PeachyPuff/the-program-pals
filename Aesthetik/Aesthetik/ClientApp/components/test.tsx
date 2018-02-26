import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as ReactDOM from 'react-dom';
import { Editor, EditorState } from 'draft-js';

export interface MyEditor {
    editorState: EditorState;
    onChange(editorState: EditorState): void;
}

//interface MyEditorProps extends RouteComponentProps<any> {
//    editorState: EditorState;
//    onChange(editorState: EditorState): void;
//}

export class MyEditor extends React.Component<{} & RouteComponentProps<{}>, any>{
    constructor(props: any) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };
        this.onChange = (editorState: any) =>
            this.setState({ editorState });
    };
    public render() {
        return (
            <Editor
                editorState={this.state.editorState}
                onChange={this.onChange} />
        );
    }
}

//ReactDOM.render(
//    <MyEditor />,
//    document.getElementById('container')
//);