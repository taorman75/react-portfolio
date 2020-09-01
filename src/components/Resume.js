import React, { Component } from "react";
import { Card, CardTitle, CardActions, Button, CardMenu, IconButton } from "react-mdl";

class Resume extends Component {
    render() {
        return(
            <div className="resume-page">
                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                 <CardTitle style={{color: '#fff', height: '250px', background: 'url(https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) center / cover'}}></CardTitle>
                    <CardActions border>
                 <Button colored href="https://drive.google.com/file/d/1FMrSpH9BI4pJTDSnf5obzGzun2kT9zDP/view?usp=sharing" target="_blank">Click here to view my resume on Google Drive</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card> </div>
        )
    }
}

export default Resume;