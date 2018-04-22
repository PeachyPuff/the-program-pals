import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import {BoldButton, ItalicButton, UnderlineButton, CodeButton, HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton,} from 'draft-js-buttons';
import { Dropdown,
		 Modal,
         Button,
         MenuItem,
         Glyphicon,
         Image
        } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap/lib';
import Logo from 'AesthetikLogo.svg';
import Background from './happyBackground1.svg';

export default class MenuBar extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      show: false,
      }
    this.setBackground = this.setBackground.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  setBackground(background){
    document.body.style.backgroundImage= "url("+ background + ")";
    document.body.style.backgroundSize= "cover";
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
    console.log("pressed");
  }
	render(){
		return(
		  <div>
      	 	<Button onClick={this.handleShow}>
      		  <Glyphicon glyph="edit" /> 
      		</Button>

              <Dropdown>
      		   <Dropdown.Toggle>
      			<Glyphicon glyph="music" /> 
      		   </Dropdown.Toggle>
      		   <Dropdown.Menu className="super-colors">
      			 <MenuItem eventKey="1">Times New Roman</MenuItem>
      			 <MenuItem eventKey="2">Georgia</MenuItem>
      			 <MenuItem eventKey="1">Times New Roman</MenuItem>
      			 <MenuItem eventKey="2">Georgia</MenuItem>
    			</Dropdown.Menu>
    		</Dropdown>
    	

      		 <Dropdown>
      		   <Dropdown.Toggle>
      			<Glyphicon glyph="font" /> 
      		   </Dropdown.Toggle>
      		   <Dropdown.Menu className="super-colors">
      			 <MenuItem eventKey="1">Times New Roman</MenuItem>
      			 <MenuItem eventKey="2">Georgia</MenuItem>
      			 <MenuItem eventKey="1">Times New Roman</MenuItem>
      			 <MenuItem eventKey="2">Georgia</MenuItem>
    			</Dropdown.Menu>
    			</Dropdown>
			
			<Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Choose Your Aesthetik</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>e n e r g e t i c.</h2>
            <Button onClick={()=>this.setBackground(Background)}>Prismatic Sunflower</Button>
            <Button>Clear Blue</Button> 
            <hr />
            <h2>p e a c e f u l. </h2>
            <Button>Peaceful</Button>
             <hr />
            <h2>a u s t e r e. </h2>
            <Button>Austere</Button> 
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </div>

			)
	}
}
