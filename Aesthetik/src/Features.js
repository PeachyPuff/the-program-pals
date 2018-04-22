import React, { Component } from 'react';
import logo from './AesthetikLogo.svg';
import ReactDOM from 'react-dom';
import { Jumbotron, Carousel } from 'react-bootstrap';
import Header  from './Header';

class Features extends React.Component {
	render(){
    return (
      <div>
       <Header />
      <Carousel>
        <Carousel.Item>
          <img width={400} height={300} alt="400x300" src={require("./featuresPage1.svg")} className="CarouselImage"/>
          <Carousel.Caption>
            <h2>Build your own writing environment to get your creative juices flowing</h2>
            <h3>Choose from 3 different Moods and a Variety of Backgrounds.</h3>
           </Carousel.Caption>
        </Carousel.Item>
      <Carousel.Item>
        <img width={400} height={300} alt="400x300" src={require("./happyBackground1.svg")} className="CarouselImage" />
        <Carousel.Caption>
          <h2>Choose Your Tik</h2>
          <h3>Pleasnt sounds to accompany your typing.</h3>
         </Carousel.Caption>
        </Carousel.Item>
      <Carousel.Item>
        <img width={400} height={300} alt="400x300" src={require("./happyBackground1.svg")} className="CarouselImage" />
        <Carousel.Caption>
          <h2>Third slide label</h2>
          <h3>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h3>
        </Carousel.Caption>
      </Carousel.Item>
     </Carousel>; 
    </div> 

      );
  }
}
export default Features;