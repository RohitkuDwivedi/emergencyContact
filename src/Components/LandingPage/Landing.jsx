import React, { Component } from "react";
import face from "../../Images/moneyHeist.png";
import "./Landing.css";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div className="lp_box">
        <div className="profileImageName">
          <img className="profPic" src={face} alt="Profile Pic" />
          <h2>Rohit Kumar Dwivedi</h2>
        </div>
      </div>
    );
  }
}

export default LandingPage;
