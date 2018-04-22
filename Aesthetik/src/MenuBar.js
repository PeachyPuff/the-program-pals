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


export default class MenuBar extends React.Component {
	render(){
		return(
			<div>
			
            			<Button>Change Theme</Button>
      					<Button>Change Tik</Button>
      					<Button>Font</Button>
      					<Button>Save</Button>
    		
		
			</div>
			)
	}
}
