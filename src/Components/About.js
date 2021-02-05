import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="images/profile.jpg"
              alt="Nordic Giant Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>
              Hi, im Mohammad Hosein Epakchian Askari a junior React Developer
              at ferdowsi cloud company and i'm also studying computer engeering
              at Islamic azad university of mashhad
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Mohammad Hosein Epakchian Askari</span>
                  <br />
                  <span>Mashhad Iran</span>
                  <br />
                  <span>+989154801941</span>
                  <br />
                  <span>epakchian@gmail.com</span>
                </p>
              </div>
              <div className="columns download"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
