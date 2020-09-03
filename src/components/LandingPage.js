import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
// import ProfileCover from "./pictures/ProfileCover";


class Landing extends Component {
    render() {
        return(
            <div style={{width: "100%", margin: "auto"}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            // src={ProfileCover}
                            alt="Tana Orman"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>HTML/CSS | BootStrap | JavaScript | React | Node.js</p>

                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/tana-orman-92ba955/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin-square"/></a>

                                <a href="https://github.com/taorman75" rel="noopener noreferrer" target="_blank"><i className="fa fa-github-square"/></a>

                                <a href="http://google.com" rel="noopener noreferrer" target="_blank"><i class="fa fa-twitter-square"></i></a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;