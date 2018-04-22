import React, { Component } from 'react';
import logo from './AesthetikLogo.svg';
import ReactDOM from 'react-dom';
import { Jumbotron } from 'react-bootstrap';
import Header  from './Header';

class LoginPage extends React.Component {
render(){
    return (
        <div>
        <Header />
        <Jumbotron className="jumbotronStyle">
          <h2>Login or Sign Up to Save Your Work</h2>
           
           </Jumbotron>
         </div> 

    	);
	}
}
export default LoginPage;