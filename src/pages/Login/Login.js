import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Login.scss";

import {emailChanged,passwordChanged,loginUser} from '../../actions/example/actionCreators';

class Login extends Component{

  onEmailChange(text){
    this.props.emailChanged(text.target.value);
  }
  onPassChange(text){
    this.props.passwordChanged(text.target.value);
  }
  
  onSubmit(){
    
    const {email, password } = this.props;
    this.props.createUser({email, password });
  
  }
render(){
  return (
    <div>
    <form onSubmit={this.onSubmit.bind(this)}>
      <div className="container">
      <label ><b>Email</b></label>
          <input 
          type="email" 
          placeholder="email" 
          name="email" 
          onChange={this.onEmailChange.bind(this)}
           value={this.props.email}
          />
          <label ><b>Password</b></label>
          <input 
          type="password" 
          placeholder="Password" 
          name="password" 
          onChange={this.onPassChange.bind(this)}
           value={this.props.password}
          />
        <button type="submit">Login</button>
        {/* <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember me
        </label> */}
      </div>
    </form>
  </div>
  )
}
}

const mapStateToProps = ({auth}) => {
  const { email, password }=auth;
  return { email,password};
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged
})(Login);
