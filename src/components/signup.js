import React, { Component } from 'react';
import { fetchAPI } from '../utils/api';
// imports go here

class Signup extends Component {
  state = {
    birthday: '',
    username: '',
    password: '',
    confirmPassword: '',
  }

  changeValue = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  submitForm = e => {
    e.preventDefault();
    const submittedUser = {
      birthday: this.state.birthday,
      username: this.state.username,
      password: this.state.password,
    };
    fetchAPI('users', 'POST', submittedUser)
      .then(res => res.json)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  disabledButton() {
    const { username, password, confirmPassword, birthday } = this.state;
    if (username.length < 3 || password.length < 3 || birthday.length < 10 || (password !== confirmPassword)) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="signup-screen">
        <form className="signupform" onSubmit={this.submitForm}>
          <header>Sign up!</header>
          <p>Enter your child's birthday!</p>
          <input type="date" id="birthday" value={this.state.birthday} onChange={this.changeValue} />
          <input type="text" id="username" placeholder="username" value={this.state.username} onChange={this.changeValue} />
          <input type="password" id="password" placeholder="password" value={this.state.password} onChange={this.changeValue} />
          <input type="password" id="confirmPassword" placeholder="confirm password" value={this.state.confirmPassword} onChange={this.changeValue} />
          <button type="submit" disabled={this.disabledButton()} >Sign up!</button>
        </form>
      </div>
    );
  }
}

export default Signup;
