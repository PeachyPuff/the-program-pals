import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BaseLayout } from './Routes.js'
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    render() {
        return <div className='main-nav'>
        <BrowserRouter>
            
    <nav className="navbar fixed-top navbar-toggleable-xl navbar-inverse bg-primary ">
      <div className="container">

          <ul className="nav navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#about">About </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Features">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#editor">Editor</a>
            </li>
          </ul>
          <a className="navbar-brand  ml-auto hidden-xs-down" href="/">Aesthetik</a>
        </div>


    </nav>

            </BrowserRouter>
        </div>;
    }
}
