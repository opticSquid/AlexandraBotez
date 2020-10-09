import React from "react";
import background from "../img/home wall.jpg";
import "../stylesheets/home.css";
import IMGS from "./img_database";
import {Container,Row, Col} from "reactstrap";
const Home = () =>
{
    let randintg = () =>
    {
        const min=17;
        const max=27;
        return (
            Math.floor(Math.random() * (+max - +min) + +min)
        );
    }
    const imgid = randintg();
    const imgFilter =  IMGS.filter((img)=>img.id>=imgid && img.id<(imgid+8));
    return(
        <Container>
            <Row>
                <img src={background} alt="Not loading"  id="jumbotron-image" className="img-fluid"/>
            </Row>
            <Row>
                <Col xs="12" className="title">
                    Trending
                </Col>
            </Row>
            <Row>
                  {
                      imgFilter.map((imgs) =>
                          {
                              return(
                                  <Col sm="3" xs="12" key={imgs.id} className="trend-image">
                                      <img  src={imgs.path} alt={imgs.id} className="img-fluid" />
                                  </Col>
                              )
                          }
                      )
                  }
            </Row>
        </Container>
    );
}
export default Home;