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

export const Audio = require('./Audio').default

ReactDOM.render(
	(<Router>
		<div>
		 <Route path="/" component={ App }/>
	  	 <Route path='/home' component={ Home }  />
	  	 <Route path='/features' component={ Features } />
		 <Route path='/editor' component={ EditorPage } />
	  	 <Route path='/login' component={ LoginPage } />
	  	</div>
	 </Router>
	 ),
	document.getElementById('root')
	);
registerServiceWorker();
