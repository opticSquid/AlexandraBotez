import React, {useState} from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Home from "./home";
import Cart from "./cart";
import Collections from "./collections";
import Order from "./order";
import IMGS from "./img_database";
import Price from "./price page";


const Header = () =>
{
    const [isOpen,setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen);
    // const PriceWithID = ({match}) =>
    // {
    //     let test = Object.entries(match);
    //     let test2 = test.filter(([prop])=>(prop === 'params'));
    //     let test3 = test2[0][1];
    //     let test4 = Object.values(test3)[0]
    //     return(
    //       <Price image={IMGS.filter((i)=>(i.id === parseInt(test4,10)))[0]}/>
    //     );
    // }
    // If everything breaks this method above will work
    const PriceWithID = ({match}) =>
    {
        return(
          <Price image={IMGS.filter((i)=>(i.id === parseInt(match.params.pId,10)))[0]}/>
        );
    }

    return(
        <Router>
            <React.Fragment>
               <Navbar color="light" light expand="md" className="fixed-top">
                   <NavbarBrand href="/">SUBH</NavbarBrand>
                   <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink to="/home" className="nav-link" >Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/cart" className="nav-link" >Cart</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/collections" className="nav-link">Collections</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/orders" className="nav-link">Orders</NavLink>
                            </NavItem>
                    </Nav>
                    </Collapse>
               </Navbar>
                <Switch>
                    <Route path="/home" component={()=><Home product={IMGS}/>}/>
                    <Route  path="/cart" component={Cart}/>
                    <Route exact path="/collections" component={()=><Collections product={IMGS}/>}/>
                    <Route path='/collections/:pId' component={PriceWithID} />
                    <Route exact path="/orders" component={Order} />
                    <Route exact path="/">
                        <Redirect to="/home"/>
                    </Route>
                </Switch>
            </React.Fragment>
        </Router>
    );
}
export default Header;