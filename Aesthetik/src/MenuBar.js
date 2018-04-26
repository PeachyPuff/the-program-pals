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

import EnergeticBack1 from './happyBackground1.svg';
import EnergeticBack2 from './energeticBack2.png';
import EnergeticBack3 from './energeticBack3.jpg';

import PeacefulBack1 from './peacefulBack1.jpg';
import PeacefulBack2 from './peacefulBack2.jpg';
import PeacefulBack3 from './lamp.gif';
import PeacefulBack4 from './rain.gif';
import AustereBack1 from './austereBack1.jpg';
import AustereBack2 from './austereBack2.jpg';
import AustereBack3 from './austereBack3.jpg';
import AustereBack4 from './austereBack4.jpg';
import $ from 'jquery';
import styled, { css } from 'styled-components';
import ReactHowler from 'react-howler';

  //<Btn>
		  	// {<a href="/home">
     //              <img  className="App-logo" width={80} height={80} alt="logo" src={require("AesthetikLogo2.svg")} />        
     //                    </a>}
     //         </Btn>

const ToggleBtn = styled.button`
  	height: 40px;
	border-radius: 3px;
    padding: 0.25em 1em;
    margin: 0 1em;
    opacity: 0.7;
    background: black;
    color: #18ba69;
    border: 2px solid #187499;


  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;  
const HomeGlyph = styled(Glyphicon)`
  font-size: 17px;
  border-radius: 3px;
  margin: 0 1em;
  background: transparent;
  color: #187499;
    ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`; 
const HomeBtn = styled.button`
  	height: 40px;
	border-radius: 3px;
    padding: 0.25em 1em;
    margin: 0 1em;
    opacity: 0.7;
  	background: transparent;
    color: #18ba69;
    border: transparent;


  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;  
const Btn = styled.button`
  height: 40px;
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  opacity: 0.7;
  background: transparent;
  color: white;
  border: 5px transparent;;
 
  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;  
const Glyph = styled(Glyphicon)`
  font-size: 17px;
  border-radius: 3px;
  margin: 0 1em;
  background: transparent;
  color: white;
    ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`; 
const Drop = styled(Dropdown)`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  opacity: 0.8;
  background: transparent;
  color: white;
  border: transparent;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`; 

export default class MenuBar extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      show: false,
      playSound: false,
      playBackgroundNoise: false,
      playBackgroundNoise2: false,
      }
    this.setBackground = this.setBackground.bind(this);
    this.setFont = this.setFont.bind(this);
    //this.setButtonTheme = this.setButtonTheme.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.setSound = this.setSound.bind(this);
    this.playTik = this.playTik.bind(this);
    this.stopTik = this.stopTik.bind(this);
    this.playBackNoise = this.playBackNoise.bind(this);
    this.playBackNoise2 = this.playBackNoise.bind(this);

  }

  playBackNoise(){
  	if(this.state.playBackgroundNoise == false){ 
  		this.setState({playBackgroundNoise: true});	
  	}
  	else{
  		this.setState({playBackgroundNoise: true});
  	}
  }
   playBackNoise2(){
  	this.setState({playBackgroundNoise2: true});
  }
  setBackground(background){
    document.body.style.background = "url("+ background + ")";
    document.body.style.backgroundSize= "cover";
    document.body.style.backgroundAttachment = "fixed";
  }
  setFont(font){
  	document.body.style.fontFamily=font;
  	var title = document.getElementsByClassName("EditorTitle");
  	title.fontFamily = font;
  }

  setSound(){
  	document.addEventListener('keypress', this.playTik);
  	document.addEventListener('keyup', this.stopTik);
  }
  playTik(){
  	this.setState({playSound: true});
  }
  stopTik(){
  	this.setState({playSound: false});
  }
  // waterSound(){
  // 	// var waterDrop = new Audio("./waterDrop.mp3");
  // 	// waterDrop.play();
  // 	$('#audio').html('<audio play><source src="./waterDrop.mp3"></audio>');
  // }

  setButtonTheme(btn){
  	console.log(btn.color);
  	btn[0].style.color = 'maroon';
    btn[0].style.border = '5px solid maroon';
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
    console.log("pressed");
    console.log(Btn);
  }
  showMenu() {
    this.setState({
    	showMenu: !this.state.showMenu
    });
  }

	render(){
		return(
		  <div>
		   <div className="in-row">

		   <ReactHowler
		   	src={require('./rain_sound.mp3')}
		   	playing={this.state.playBackgroundNoise}
		   	preload={true} 
		   	loop={true}
		   	/>
	
		  	<ToggleBtn onClick={this.showMenu.bind(this)}><Glyph glyph="eye-open" /></ToggleBtn>

		  	{!this.state.showMenu && 
		  		<a href="/home">
		  			<HomeBtn>
      		  			<HomeGlyph glyph="home" /> 
      		  		
      				</HomeBtn>
      			</a>
      		}

		  	{!this.state.showMenu && 
		  		<Btn className="styled-btn" onClick={this.handleShow}>
      		  		<Glyph glyph="edit" /> 
      			</Btn>
      		}
      		
		  	{!this.state.showMenu && 
		  	
              <Dropdown id="sound-menu">
      		  <Dropdown.Toggle style={{background:"transparent", color: "white", border:"5px solid transparent", opacity: "0.8", borderRadius: "3px", padding: "0.25em 1em", margin: "0 1em"}} className="sound-list">
      			<Glyph glyph="music" /> 
      		   </Dropdown.Toggle>
      		   <Dropdown.Menu className="sound-list">
      			 <MenuItem eventKey="1"onSelect={this.playBackNoise}>Water Drop</MenuItem>
      			 <MenuItem eventKey="2">Crashing Waves</MenuItem>
    			</Dropdown.Menu>
    		 </Dropdown>}
    

      	 	{!this.state.showMenu && <Dropdown id='font-menu'>
      		   <Dropdown.Toggle style={{background:"transparent", color: "white", border:"5px solid transparent", opacity: "0.8", borderRadius: "3px", padding: "0.25em 1em", margin: "0 1em"}}>
      			<Glyph glyph="font" /> 
      		   </Dropdown.Toggle>
      		   <Dropdown.Menu className="font-list">
      			 <MenuItem eventKey="1" onSelect={()=>this.setFont('times')}>Times New Roman</MenuItem>
      			 <MenuItem eventKey="2" onSelect={()=>this.setFont('georgia')}>Georgia</MenuItem>
      			 <MenuItem eventKey="1" onSelect={()=>this.setFont('candara')}>Candara</MenuItem>
      			 <MenuItem eventKey="2" onSelect={()=>this.setFont('Lucida Bright')}>Lucida Bright</MenuItem>
    			</Dropdown.Menu>
    			</Dropdown>}      		 
    		 
			</div>
			<Modal show={this.state.show} onHide={this.handleClose}>
          		<Modal.Header closeButton>
            		<Modal.Title>Choose Your Aesthetik</Modal.Title>
          		</Modal.Header>
          		<Modal.Body>
            		<h2>e n e r g e t i c.</h2>
            		<Button onClick={()=>this.setBackground(EnergeticBack1)}>Prismatic Sunflower</Button>
            		<Button onClick={()=>this.setBackground(EnergeticBack2)}>Flower Branch</Button>
            		<Button onClick={()=>this.setBackground(EnergeticBack3)}>Blossom</Button> 
            		<hr />
            		<h2>p e a c e f u l. </h2>
            		<Button onClick={()=>this.setBackground(PeacefulBack4)}>Rainy Day</Button>
            		<Button onClick={()=>this.setBackground(PeacefulBack1)}>Still Water</Button>
            		<Button onClick={()=>this.setBackground(PeacefulBack2)}>Sunset Waters</Button>
            		<Button onClick={()=>this.setBackground(PeacefulBack3)}>Snowy Night</Button>
             		<hr />
            		<h2>a u s t e r e. </h2>
            		<Button onClick={()=>this.setBackground(AustereBack1)}> Vast Lake</Button>
            		<Button onClick={()=>this.setBackground(AustereBack2)}> Desktop </Button>
            		<Button onClick={()=>this.setBackground(AustereBack3)}> Grim City </Button> 
            		<Button onClick={()=>this.setBackground(AustereBack4)}> Deep Fog </Button>  
          		</Modal.Body>
          		<Modal.Footer>
            		<Button onClick={this.handleClose}>Close</Button>
          		</Modal.Footer>
        	</Modal>

        </div>


			)
	}
}
