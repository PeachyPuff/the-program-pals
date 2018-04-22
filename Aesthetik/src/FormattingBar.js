import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import {BoldButton, ItalicButton, UnderlineButton, CodeButton, HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton,} from 'draft-js-buttons';
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

var StyledButton = {
  backgroundImage: 'url(' + 'bigButton.svg' + ')'
}

export default class FormattingBar extends React.Component {
	render(){
		return(
			<div>
			<Navbar fixedTop inverse collapseOnSelect>
            	<Navbar.Header>
            		<Navbar.Brand className="navbar-brand">
            			{<a href="/home">
                  			<img width={150} height={150} alt="logo" align="top" src={require("AesthetikLogo.svg")} />        
                        </a>}
          </Navbar.Brand>
    			<Navbar.Toggle />
  				</Navbar.Header>
  				<Navbar.Collapse>
    				<Nav>
            			<NavItem eventKey={1} href="#">
            				Link
      					</NavItem>
      					<NavItem eventKey={2} href="#">
            				Link
      					</NavItem>
      					<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            				<MenuItem eventKey={3.1}>Action</MenuItem>
            				<MenuItem eventKey={3.2}>Another action</MenuItem>
            				<MenuItem eventKey={3.3}>Something else here</MenuItem>
            				<MenuItem divider />
            				<MenuItem eventKey={3.3}>Separated link</MenuItem>
      					</NavDropdown>
    				</Nav>
    				<Nav pullRight>
      					<NavItem eventKey={1} href="#">
            				Link Right
      					</NavItem>
     	 				<NavItem eventKey={2} href="#">
            				Link Right
      					</NavItem>
    				</Nav>
 		 		</Navbar.Collapse>
			</Navbar>;
		
			</div>
			)
	}
}
