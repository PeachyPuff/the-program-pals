import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import EditorPage from './Editor';
import Features from './Features';
import LoginPage from './Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import registerServiceWorker from 'registerServiceWorker';

ReactDOM.render(
	(<App />
	 ),
	document.getElementById('root')
	);
registerServiceWorker();
