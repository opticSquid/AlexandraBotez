import React from "react";
import {Container,Row, Col} from "reactstrap";
import "../stylesheets/home.css";
import colwall from "../img/hindu wall.jpg";
import Slider from "./autoslider";
import {Link} from "react-router-dom";

const Collections = (props) =>
{
    const menimgmap = props.product.filter((img)=>img.id>=1 && img.id<8);
    const womenimgmap = props.product.filter((img)=>img.id>=8 && img.id<19);
    return(
        <Container>
            <Row>
                <img src={colwall} alt="Not loading"  id="jumbotron-image" className="img-fluid"/>
            </Row>
            <Row>
                <Col xs="12" className="title">
                    Men's Fashion
                </Col>
            </Row>
            <Row>
                {
                    menimgmap.map((imgs)=>
                        {
                            return(
                                <Col key={imgs.id} sm="4" xs="12" className="trend-image">
                                    <Link to={`/Collections/${imgs.id}`}>
                                        <img src={imgs.path} alt={imgs.name} className="img-fluid" />
                                    </Link>
                                </Col>
                            )
                        }
                    )
                }
            </Row>
            <Row>
                <Col xs="12">
                    <Slider/>
                </Col>
            </Row>
            <Row>
                <Col xs="12" className="title">
                    Lady's Fashion
                </Col>
            </Row>
            <Row>
                {
                    womenimgmap.map((imgs)=>
                        {
                            return(
                                <Col key={imgs.id} sm="4" xs="12" className="trend-image">
                                    <Link to={`/Collections/${imgs.id}`}>
                                        <img src={imgs.path} alt={imgs.name} className="img-fluid" />
                                    </Link>
                                </Col>
                            )
                        }
                    )
                }
            </Row>
        </Container>
    );
}
export default Collections;