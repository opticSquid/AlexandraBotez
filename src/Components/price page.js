import React from "react";
import {Container,Row,Col} from "reactstrap";
import "../stylesheets/price.css";
const Renderpage = ({image}) =>
{
    if(image!==null)
    {
        return (
            <Container className="body">
                <Row>
                   <Col xs="12" sm="6">
                        <img src={image.path} className="img-fluid" alt={image.id} />
                   </Col>
                   <Col xs="12" sm="6">
                       <h1 className="text-danger text-center">{image.price}</h1>
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