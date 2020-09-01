import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
        return(
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
               <CardTitle style={{color: "#fff", height: "176px", background: "url(https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) center / cover"}}>React Project</CardTitle> 
               <CardText>
               Doggo ipsum very taste wow heckin good boys he made many woofs, very hand that feed shibe. 
               </CardText>
               <CardActions border>
                   <Button colored href="http://google.com" target="_blank">Github</Button>
                   <Button colored>Live</Button>
                   <Button colored>Test</Button>
               </CardActions>
               <CardMenu style={{color: "#fff"}}>
                   <IconButton name="share" />
               </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
            <CardTitle style={{color: "#fff", height: "176px", background: "url(https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) center / cover"}}>React Project</CardTitle> 
                <CardText>
                    Doggo ipsum very taste wow heckin good boys he made many woofs, very hand that feed shibe. 
            </CardText>
            <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Live</Button>
                <Button colored>Test</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
            <IconButton name="share" />
            </CardMenu>
            </Card>
            </div>
        )
    } else if (this.state.activeTab === 1) {
        return(
            <div>
                <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
            <CardTitle style={{color: "#fff", height: "176px", background: "url(https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) center / cover"}}>React Project</CardTitle> 
                <CardText>
                    Doggo ipsum very taste wow heckin good boys he made many woofs, very hand that feed shibe. 
            </CardText>
            <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Live</Button>
                <Button colored>Test</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
            <IconButton name="share" />
            </CardMenu>
            </Card>
            </div>
        )
    } else if (this.state.activeTab === 2) {
        return(
            <div>
                <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
            <CardTitle style={{color: "black", height: "176px", background: "url(data:image/png;base64,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) center / cover"}}>Donut Seeker</CardTitle> 
                <CardText>
                Donut Seeker is a collaborative creation of a group of bootcamp students! The app tells the user where the nearest donuts can be acquired, based on current location or a zip code search. Utilizes Google Places, Google Maps, and the Giphy API. Built with Bulma.
            </CardText>
            <CardActions border>
                <Button colored href="https://github.com/taorman75/donut-seeker" target="_blank">Github</Button>
                <Button colored href="https://britt1216.github.io/donut-seeker/" target="_blank">Live</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
            <IconButton name="share" />
            </CardMenu>
            </Card>
            </div>
        )
    } else if (this.state.activeTab === 3) {
        return(
            <div>
                <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
            <CardTitle style={{color: "#fff", height: "176px", background: "url(https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) center / cover"}}>React Project</CardTitle> 
                <CardText>
                    Doggo ipsum very taste wow heckin good boys he made many woofs, very hand that feed shibe. 
            </CardText>
            <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Live</Button>
                <Button colored>Test</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
            <IconButton name="share" />
            </CardMenu>
            </Card>
            </div>
        )
    }
}

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Node.js</Tab>
                    <Tab>JavaScript/APIs</Tab>
                    <Tab>Handlebars/Sequelize</Tab>
                </Tabs>

                
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    
               
            </div>
        )
    }
}

export default Projects;