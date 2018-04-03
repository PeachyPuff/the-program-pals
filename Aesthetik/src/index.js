import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import EditorPage from './Editor';
import Features from './Features';
import LoginPage from './Login';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	(<BrowserRouter>
		<Route path="/" component={ App }>
	  	  <Route path='/home' component={ Home }  />
	  	  <Route path='/features' component={ Features } />
		  <Route path='/editor' component={ EditorPage } />
	  	  <Route path='/login' component={ LoginPage } />
	  	</Route>
	 </BrowserRouter>
	 ),
	document.getElementById('root')
	);
registerServiceWorker();
