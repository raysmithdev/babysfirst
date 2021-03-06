import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/styles.css';

class Splash extends Component {
  state = {
    hoverview1: false,
    hoverZone2: false,
    hoverZone3: false,
  };

  onMouseEnterHandler() {
    console.log('enter');
    this.setState({
      hover: true,
    });
    console.log('enter');
  }

  onMouseLeaveHandler() {
    this.setState({
      hover: false,
    });
    console.log('leave');
  }

  render() {
    let pencilDescription;
    if (this.state.hoverview1) {
      pencilDescription = (
        <div className="animated fadeIn pencildiv">
          <p>Record a moment in your own words.</p>
        </div>
      );
    }
    if (!this.state.hoverview1) {
      pencilDescription = '';
    }
    let cameraDescription;
    if (this.state.hoverview1) {
      cameraDescription = (
        <div className="animated hidden fadeIn pictureframediv">
          <p>Add a picture.</p>
        </div>
      );
    }
    if (!this.state.hoverview1) {
      cameraDescription = '';
    }
    let ballDescription;
    if (this.state.hoverview1) {
      ballDescription = (
        <div className="animated hidden fadeIn playgrounddiv">
          <p>Relive the experiences on a personalized timeline.</p>
        </div>
      );
    }
    if (!this.state.hoverview1) {
      ballDescription = '';
    }
    return (
      <div className="login-form">
        <nav className="splashNav">
          <ul className="fullscreen">
            <Link to="/signup" className="signupbutton button darken_hover">
              <li>Sign up</li>
            </Link>
            <Link to="/login" className="loginbutton button darken_hover">
              <li>Log In</li>
            </Link>
          </ul>
          <div className="menucontainer">
            <div className="menuButtonContainer">
              <img
                className="menuicon"
                src="./images/lego.png"
                alt="menuimage"
              />
              <span className="menulabel">Menu</span>
            </div>
            <ul className="animated dropdown fadeOut">
              <Link to="/signup" className="signupbutton button darken_hover">
                <li>Signup</li>
              </Link>
              <Link to="/login" className="loginbutton button darken_hover">
                <li>Log In</li>
              </Link>
            </ul>
          </div>
        </nav>
        <div className="splashSectionOne">
          <h1 className="appTitle">First Memories</h1>
        </div>
        <div className="splashSectionTwo">
          <p className="journal">A new kind of journal.</p>
          <ul className="icons">
            <li className="hoverview1">
              <img src="./images/Pencil-48.png" alt="pencil" />
              <div className="smallscreen_instructions pencildiv_smallscreen">
                <p>Record a moment in your own words.</p>
              </div>
            </li>
            <li className="hoverview2">
              <img src="./images/camera2.png" alt="pictureframe" />

              <div className="smallscreen_instructions pictureframe_smallscreen">
                <p>Add a picture.</p>
              </div>
            </li>
            <li className="hoverview3">
              <img src="./images/beach-ball-clipart.jpg" alt="playground" />

              <div className="smallscreen_instructions playground_smallscreen">
                <p>Relive the experiences on a personalized timeline.</p>
              </div>
            </li>
            <div className="bottomInstructionContainer">
              {pencilDescription}
              {cameraDescription}
              {ballDescription}
            </div>
          </ul>

        </div>
        <div className="splashSectionThree">
          <div className="sectionThreeContainer">
            <p className="everymoment">
              Every moment with a child is precious, but some moments become memories.
            </p>
          </div>
        </div>
        <div className="splashSectionFour">
          <div className="center">
            <p className="neverforget">Never forget a single first.</p>
            <Link to="/signup" className="signupbutton button2 bluehover">
              Sign up
            </Link>
            <Link to="/login" className="loginbutton button2 pinkhover">
              Log In
            </Link>

          </div>

        </div>
        <div className="splashFooter">
          <p className="built">
            <span className="by">Built by Connor Ericson</span>
            <div className="githubcontainer">
              <a
                href="https://github.com/condericson/babysfirst"
                className="nostyle"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i
                  className="fa fa-github fa-2x githubLogo"
                  aria-hidden="true"
                />
              </a>
            </div>
          </p>
        </div>
      </div>
    );
  }
}

export default Splash;

// onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}
