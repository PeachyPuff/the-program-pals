import React from 'react';
import { Navbar,
         Nav,
         NavItem,
         Button,
         NavDropdown,
         MenuItem,
         Glyphicon
        } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap/lib';

class Header extends React.Component {
  render() {
    return (
      <Navbar fixedTop >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">
              Aesthetik
            </a>
          </Navbar.Brand>
        </Navbar.Header>
       
          <Nav bsStyle="pills">
          <IndexLinkContainer to="/">
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
              eventKey={3}>
              Editor
            </NavItem>
          </IndexLinkContainer>
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