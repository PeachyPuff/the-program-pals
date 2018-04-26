import React from 'react';
import { Grid, Nav, NavItem } from 'react-bootstrap';

function Footer(/*props*/) {
  return (
    <footer className="push">
      <Grid>

        <div className="text-center small copyright">
         <Nav justified>
          <NavItem
            eventKey={1}>
            Privacy policy
          </NavItem>
          <NavItem
            eventKey={2}
            title="Item">
            Terms & Conditions
          </NavItem>
          <NavItem
            eventKey={3}>
            Some other professional link
          </NavItem>
        </Nav>
           Elizabeth Nelson & Hasan Sahli. © 2018
        </div>


      </Grid>
    </footer>
  );
}

export default Footer;