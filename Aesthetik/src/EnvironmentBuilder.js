import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

export default class EnvBuilder extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			function createEnergeticEnv(background){
				const styles = StyleSheet.create({
					happyBack: {
						background: background
					}
				})
			}
			

		)
	}

}

