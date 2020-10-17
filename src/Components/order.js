import React from "react";
import {Container,Row,Col} from "reactstrap";
import background from "../img/home wall.jpg";
const Order = () =>{
    return(
        <Container>
            <Row>
                <img src={background} alt="Not loading"  id="jumbotron-image" className="img-fluid"/>
            </Row>
            <Row>
                <Col xs="12">
                    <h1>Order Page</h1>
                </Col>
            </Row>
        </Container>
    );
}
export default Order;