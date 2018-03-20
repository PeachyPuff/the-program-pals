import * as React from 'react';
import { RouteComponentProps } from 'react-router';


export class TextArea extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>

            <div className='editor'>
                <h1 contentEditable={true}>
                Creating editable content with DesignMode
                </h1>
                <p contentEditable={true}>
                Turning <code>document.designMode</code> on creates a page that is editable inline, by the user, on their browser! No text boxes needed at all.
                </p>
            </div>
        </div>;
    }
}