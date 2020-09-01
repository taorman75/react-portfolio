import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";


class Landing extends Component {
    render() {
        return(
            <div style={{width: "100%", margin: "auto"}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="data:image/png;base64,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"
                            alt="horse"
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