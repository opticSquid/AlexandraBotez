import React, {useState} from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./home";
import Cart from "./cart";
import Collections from "./collections";
import Order from "./order";
const Header = () =>
{
    const [isOpen,setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return(
        <Router>
            <React.Fragment>
               <Navbar color="light" light expand="md" className="fixed-top">
                   <NavbarBrand href="/">SUBH</NavbarBrand>
                   <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link to={"/"} className="nav-link" >Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to={"/cart"} className="nav-link" >Cart</Link>
                            </NavItem>
                            <NavItem>
                                <Link to={"/collections"} className="nav-link">Collections</Link>
                            </NavItem>
                            <NavItem>
                                <Link to={"/orders"} className="nav-link">Orders</Link>
                            </NavItem>
                    </Nav>
                    </Collapse>
               </Navbar>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route  path="/Cart" component={Cart}/>
                    <Route  path="/Collections" component={Collections}/>
                    <Route  path="/Orders" component={Order} />
                </Switch>
            </React.Fragment>
        </Router>
    );
}
export default Header;