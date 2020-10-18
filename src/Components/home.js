import React from "react";
import background from "../img/home wall.jpg";
import "../stylesheets/home.css";
import {Container,Row, Col} from "reactstrap";
import {Link} from "react-router-dom";
const Home = (props) =>
{
    let randintg = () =>
    {
        const min=1;
        const max=10;
        return (
            Math.floor(Math.random() * (+max - +min) + +min)
        );
    }
    const imgid = randintg();
    const imgFilter =  props.product.filter((img)=>img.id>=imgid && img.id<(imgid+8));
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
                                      <Link to={`/Collections/${imgs.id}`}>
                                        <img  src={imgs.path} alt={imgs.name} className="img-fluid" />
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
export default Home;