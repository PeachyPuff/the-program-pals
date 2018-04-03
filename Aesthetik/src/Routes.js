import React, { Component } from 'react';
import logo from './AesthetikLogo.svg';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import  App from './App.js';
import  AboutPage from './About.js';
import  FeaturesPage from './Features.js';
import  LoginPage  from './Login.js';
import  EditorPage  from './Editor.js';

export const BaseLayout = () => (
	<div>
		<Route path='/home' component={ App }  />
		<Route path='/about' component={ AboutPage } />
		<Route path='/editor' component={ EditorPage } />
		<Route path='/features' component={ FeaturesPage } />
		<Route path='/login' component={ LoginPage } />
    </div>
);
