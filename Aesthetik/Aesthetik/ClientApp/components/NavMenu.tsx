import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';


export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <nav className='main-nav'>
            <nav className="navbar mb-4 navbar-expand-md navbar-dark bg-dark"></nav>
            <div className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Aesthetik</a>
                    </div>
                    <div className='clearfix'></div>
                    <div className="container">
                       
                                <NavLink to={'/'} exact activeClassName='active'>
                                    <span className='glyphicon glyphicon-home'></span> Aesthetik
                            </NavLink>
                           
                                <NavLink to={'/textarea'} activeClassName='active'>
                                    <span className='glyphicon glyphicon-th-list'></span> TestTextArea
                            </NavLink>
                                <NavLink to={'/textarea'} activeClassName='active'>
                                    <span className='glyphicon glyphicon-th-list'></span> About
                            </NavLink>
                                <NavLink to={'/textarea'} activeClassName='active'>
                                    <span className='glyphicon glyphicon-th-list'></span> Features
                            </NavLink>

                                <NavLink to={'/myeditor'} activeClassName='active'>
                                    <span className='glyphicon glyphicon-th-list'></span> Editor
                            </NavLink>
                            
                          
                    </div>
                </div>
                </div>
            </nav>
  
    }
}
