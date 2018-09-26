import React, { Component } from 'react';
import logo from './AesthetikLogo.svg';
import ReactDOM from 'react-dom';
import './creative-bootstrap-v3/vendor/bootstrap/css/bootstrap.css';
//import './creative-bootstrap-v3/css/creative.css';
import { Grid, Row, Col } from 'react-bootstrap';
import Home from './Home';
import './App.css'; 
import Footer from "./Footer"

import EditorPage from './Editor';
import Features from './Features';
import LoginPage from './Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// const Footer = ()=>(<h5>a e s t h e t i k. Developed by Elizabeth Nelson and Hasan Sahli. 2018. </h5>);

export default class App extends React.Component {
  
  render() {
    return (
        <div className = "App">
        	<Router>
				<div>
		 <Route exact path='/' component={ Home }  />
	  	 <Route path='/features' component={ Features } />
		 <Route path='/editor' component={ EditorPage } />
	  	 <Route path='/login' component={ LoginPage } />
	  	</div>
	 </Router>
        </div>
    );
  }
}
