import React from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import styled from "styled-components";

const DayCard = ({  }) => {
    return (
        // <DayWrapper onClick={setSelectedDay} isActive={isActive}>
        <Card>
            <CardHeader>
                <h1>TEST</h1>
                {/* {day} */}
            </CardHeader>
            <CardBody>
                <h2>Test Project</h2>
                <h2>Image</h2>
                <p>Deployed Link</p>
                <p>Git Hub Link</p>
                <p>Description</p>
            </CardBody>
        </Card>
        // </DayWrapper>
    );
}

export default DayCard;