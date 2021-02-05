import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import { Container, Grid } from "@material-ui/core";
import "../header.css";

class Header extends Component {
  render() {
    if (this.props.data) {
      var project = this.props.data.project;
      var github = this.props.data.github;
      var name = this.props.data.name;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Container className="cont">
              <Grid container>
                <Grid
                  item
                  container
                  xs={12}
                  md={7}
                  justify="center"
                  direction="column"
                >
                  <h2 className="text">Hi, my name is</h2>
                  <h2 className="name"> Mohammad Hosein Epakchian Askari</h2>
                  <h2 className="text">I'm the Unknown Developer.</h2>
                </Grid>
                <Grid item xs={12} md={4}>
                  <img className="img" src="images/avatar.jpg" />
                </Grid>
              </Grid>
            </Container>
            <hr />
            <ul className="social">
              <a href={project} className="button btn project-btn">
                <i className="fa fa-book"></i>Project
              </a>
              <a href={github} className="button btn github-btn">
                <i className="fa fa-github"></i>Github
              </a>
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;

// import React, { Component } from "react";
// import { Container, Grid } from "@material-ui/core";
// import "../header.css";

// class Header extends Component {
//   render() {
//     return (
//       <div className="head">
//         <Container className='cont'>
//           <Grid container>
//             <Grid item container xs={12} md={8} justify="center" direction='column'>
//               <h1>
//                 Hi, my name is Mohammad Hosein Epakchian Askari I'm the Unknown
//                 Developer.
//               </h1>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <img className='img' src="images/avatar.jpg" />
//             </Grid>
//           </Grid>
//         </Container>
//       </div>
//     );
//   }
// }

// export default Header;
