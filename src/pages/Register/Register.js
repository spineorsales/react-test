import React from "react";
import { connect } from "react-redux";
import styles from "./Register.scss";

const Register = () => {
  //Todo Product listing
  return (
    <div>
    <form>
      <div className="container">
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname"  />
        <label for="psw"><b>Email</b></label>
        <input type="email" placeholder="email" name="email" />
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Password" name="psw" />
        <label for="psw"><b>Repeat Passwor</b></label>
        <input type="password" placeholder="Repeat Passwor" name="psw" />
        <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember me
        </label>
        <button type="submit">Login</button>
        
      </div>
    </form>
  </div>
  )
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
