import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import EditorPage from './Editor';
import Features from './Features';
import LoginPage from './Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	(<Router>
		<ul>
		 <li><Route path="/" component={ App }/></li>
	  	 <li><Route path='/home' component={ Home }  /></li>
	  	 <li><Route path='/features' component={ Features } /></li>
		 <li><Route path='/editor' component={ EditorPage } /></li>
	  	 <li><Route path='/login' component={ LoginPage } /></li>
	  	</ul>
	 </Router>
	 ),
	document.getElementById('root')
	);
registerServiceWorker();
