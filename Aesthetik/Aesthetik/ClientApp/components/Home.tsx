import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as s from './HomeStyle.css';

let logoImage = document.getElementById("logo1.svg") as HTMLImageElement;
//<img src={require('logo1.svg')} alt="Test" />
export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        s.body;
 
        return <div>
            <h1>Aesthetik</h1>
            
        </div>;
     
    }
}
