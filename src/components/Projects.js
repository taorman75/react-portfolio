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
                   <Button colored>Github</Button>
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
            <div><h1>This is Node</h1></div>
        )
    } else if (this.state.activeTab === 2) {
        return(
            <div><h1>This is APIs</h1></div>
        )
    } else if (this.state.activeTab === 3) {
        return(
            <div><h1>This is HB/SQL</h1></div>
        )
    }
}

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Node.js</Tab>
                    <Tab>APIs</Tab>
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