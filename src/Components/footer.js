import React from "react";
import {Row,Col} from "reactstrap";
import "../stylesheets/home.css";
import { faFacebook, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () =>
{
    return(
        <div  className="container-fluid footer">
            <Row>
                <Col xs="12" className="title">
                    Subh
                </Col>
                <Col xs="12" className="text-warning subtitle">
                    <h5>With you in the moments</h5>
                </Col>
            </Row>
            <Row>
                <Col xs="12">
                    <FontAwesomeIcon icon={faFacebook}  size="2x" className="social"/>
                    <FontAwesomeIcon icon={faTwitter} size="2x" className="social"/>
                    <FontAwesomeIcon icon={faInstagram} size="2x" className="social"/>
                </Col>
            </Row>
        </div>
    )
}
export default Footer;