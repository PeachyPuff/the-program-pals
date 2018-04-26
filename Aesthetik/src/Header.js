import React from 'react';
import { Navbar,
         Nav,
         NavItem,
         Button,
         NavDropdown,
         MenuItem,
         Glyphicon,
         Image
        } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap/lib';
import Logo from 'AesthetikLogo.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderChild: true}
    this.handleChildUnmount = this.handleChildUnmount.bind(this);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  handleChildUnmount(){
        this.setState({renderChild: false});
    }

  render() {
    return (
      <Navbar fixedTop inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand className="navbar-brand">
          
            {<a href="/home">
                  <img className="App-logo" width={100} height={100} alt="logo" align="top" src={require("AesthetikLogo2.svg")} />        
                        </a>}
          </Navbar.Brand>
        </Navbar.Header>
       
          <Nav bsStyle="pills">
          <IndexLinkContainer to="/home">
            <NavItem
              eventKey={1}>
              Home
            </NavItem>
          </IndexLinkContainer>
          <IndexLinkContainer to="/features">
            <NavItem
              eventKey={2}>
              Features
            </NavItem>
          </IndexLinkContainer>
          <IndexLinkContainer to="/editor">
            <NavItem
              onClick={this.handleChildUnmount}
              eventKey={3}>
              Editor
            </NavItem>
          </IndexLinkContainer>
          
          </Nav>
       <Nav pullRight>
          <IndexLinkContainer to="/login">
           
            <NavItem 
              eventKey={4}
              href="#">
              Login
            </NavItem>
            
          </IndexLinkContainer>
          </Nav>
      </Navbar>
    );
  }
}


export default Header; 