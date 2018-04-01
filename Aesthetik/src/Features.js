import React, { Component } from 'react';
import logo from './AesthetikLogo.svg';
import ReactDOM from 'react-dom';
import { Jumbotron } from 'react-bootstrap';

class Features extends React.Component {
	render(){
    return (
        <div>
        <Jumbotron>
          <h2>Build your own writing environment to get your creative juices flowing</h2>
            <p>Choose a theme.</p>
           </Jumbotron>
         </div> 

    	);
	}
}
export default Features;