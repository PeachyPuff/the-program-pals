import React, { Component } from 'react';

var fromPrototype = function(prototype, object) {  
    var newObject = Object.create(prototype);
    for (var prop in object) {
        if (object.hasOwnProperty(prop)) {
            newObject[prop] = object[prop];
        }
    }
  return newObject;
};


const EnvironmentFactory = (background, tik, textfield) => ({

	createBackground: function(background){

	};
	createTik: function(tik){};
	createTextfield: function(textfield){};



})

const EnergeticEnvironment = () => (
	{
		fromPrototype(EnvironmentFactory, {
			createBackground: function(){
				return
			},
			createTik: function(){}
		})


	});
const PeacefulEnvironment = () => ({});
const AustereEnvironment = () => ({});


// export default class EnvironmentFactory extends React.Component {
//   constructor(background, tik, textfield){
//   	this.background =  background;
//   	this.tik = tik;
//   	this.textfield = textfield;

//   }
//   render() {
//   	return(



//   		);
//   }
// }