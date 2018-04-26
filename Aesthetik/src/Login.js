import React, { Component } from 'react';
import logo from './AesthetikLogo.svg';
import ReactDOM from 'react-dom';
import { Jumbotron } from 'react-bootstrap';
import Header  from './Header';
import Footer from "./Footer"
import { GoogleLogin } from 'react-google-login-component';
 
class LoginPage extends React.Component{
 
  constructor (props, context) {
    super(props, context);
  }
 
  responseGoogle (googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var googleId = googleUser.getId();
    
    console.log({ googleId });
    console.log({accessToken: id_token});
    //anything else you want to do(save to localStorage)...
  }
 
  render () {
    return (
      <div>
      <Header />
      <Jumbotron className="jumbotronStyle vertical-center">
        <GoogleLogin socialId="111389958224-l2tj8a0ftqk676n2br2aia3ipppa4ur1.apps.googleusercontent.com"
                     className="google-login"
                     scope="profile"
                     fetchBasicProfile={false}
                     responseHandler={this.responseGoogle}
                     buttonText="Login With Google"/>
       </Jumbotron>    
       <Footer />          
      </div>
      
    );
  }
 
}
 
export default LoginPage;