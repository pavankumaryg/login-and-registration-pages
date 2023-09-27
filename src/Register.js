import React, { PureComponent } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startRegister } from "./actions.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Register extends PureComponent {
  constructor() {
    super();

    this.state = {
      fname: "",
      lname: "",
      dob: "",
      gender: "",
      aadhar: "",
      username: "",
      password: "",
      confirmPassword: "",
      email: ""
    };
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  register = (e) => {
    e.preventDefault();
    const {
      fname,
      lname,
      dob,
      gender,
      aadhar,
      username,
      password,
      confirmPassword,
      email
    } = this.state;
    this.setState({
      fname: "",
      lname: "",
      dob: "",
      gender: "",
      aadhar: "",
      username: "",
      password: "",
      confirmPassword: "",
      email: ""
    });
    console.log(
      fname,
      lname,
      dob,
      gender,
      aadhar,
      username,
      email,
      password,
      confirmPassword
    );
    this.props.register(this.state);
  };

  render() {
    const {
      fname,
      lname,
      dob,
      gender,
      aadhar,
      username,
      password,
      confirmPassword,
      email
    } = this.state;
    return (
      <form className="loginForm">
        {this.props.registered ? "Registered" : ""}
        {this.props.registering && !this.props.registered ? "Registering" : ""}
        <h1 className="heading">Register Here!</h1>

        <div className="field">
          <div className="customInput">
            <FontAwesomeIcon className="inputicon" />
            <input
              className="inputfield"
              type="fnmae"
              placeholder="First Name"
              autoComplete="fname"
              name="fname"
              value={fname}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="customInput">
            <FontAwesomeIcon className="inputicon" />
            <input
              className="inputfield"
              type="lname"
              placeholder="Last Name"
              autoComplete="lname"
              name="lname"
              value={lname}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="customInput">
            <FontAwesomeIcon className="inputicon" />
            Dob
            <input
              className="inputfield"
              type="date"
              placeholder="Dob"
              autoComplete="dob"
              name="dob"
              value={dob}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div>
          <label>Gender</label>
          <p class="male">
            Male
            <input type="radio" name="input" value="Male" id="Gender" />
          </p>
          <p class="Female">
            Female
            <input type="radio" name="input" value="Female" id="Gender" />
          </p>
          <p class="Others">
            Others
            <input type="radio" name="input" value="Others" id="Gender" />
          </p>
        </div>

        <div className="field">
          <div className="customInput">
            <FontAwesomeIcon className="inputicon" />
            <input
              className="inputfield"
              type="aadhar"
              placeholder="Aadhar"
              autoComplete="aadhar"
              name="aadhar"
              value={aadhar}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="field">
          <div className="customInput">
            <FontAwesomeIcon className="inputicon" />
            <input
              className="inputfield"
              type="username"
              placeholder="Username"
              autoComplete="username"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="field">
          <div className="customInput">
            <FontAwesomeIcon className="inputicon" />
            <input
              className="inputfield"
              type="password"
              placeholder="Password"
              autoComplete="new-password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="customInput">
            <FontAwesomeIcon className="inputicon" />
            <input
              className="inputfield"
              type="password"
              placeholder="Confirm Password"
              autoComplete="new-password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="customInput">
            <FontAwesomeIcon className="inputicon" />
            <input
              className="inputfield"
              type="email"
              placeholder="Email"
              autoComplete="username"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="field submitfield">
          <input
            className="submit"
            type="submit"
            value="SIGN UP"
            onClick={this.register}
          />
        </div>
        <div className="field signupfield">
          <span className="linkfield">
            <Link to="/">Already Signed Up? Login here</Link>
          </span>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    registered: state.registered,
    registering: state.registering
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (content) => dispatch(startRegister(content))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
