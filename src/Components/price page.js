import React from "react";
import {Container,Row,Col,Badge,Button} from "reactstrap";
import "../stylesheets/price.css";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Renderpage = ({image}) =>
{
    if(image!==null)
    {
        return (
            <Container className="body">
                <Row>
                   <Col xs="12" sm="6">
                        <img src={image.path} className="img-fluid" alt={image.name} />
                   </Col>
                   <Col xs="12" sm="6">
                       <Row>
                           <Col xs="12">
                               <h1 className="text-center">{image.name}</h1>
                           </Col>
                       </Row>
                       <Row>
                           <Col xs="12">
                               <h2 className="text-danger text-center">&#x20B9;{image.price}</h2>
                           </Col>
                       </Row>
                       <Row>
                           <Col xs="12">
                               <Badge color="warning" className="b mb-1">
                                   <FontAwesomeIcon icon={faStar}  size="2x" />
                                   <span className="rating-text">{image.ratings}</span>
                               </Badge>
                           </Col>
                       </Row>
                       <Row>
                           <Col xs="12">
                               <Button color="success" size="lg" block className="mb-1">
                                    Buy Now
                               </Button>
                           </Col>
                       </Row>
                       <Row>
                           <Col xs="12">
                               <Button color="info" size="lg" block className="mb-1">
                                    Add to Cart
                               </Button>
                           </Col>
                       </Row>
                   </Col>
           </Row>
            </Container>
        );
    }
}
const Price = (props) =>
{
    if(props!=null)
    {
        return(
            <React.Fragment key={props.image.id}>
                <Renderpage image={props.image}/>
            </React.Fragment>
        );
    }
}
export default Price;