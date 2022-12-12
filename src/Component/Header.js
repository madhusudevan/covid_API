import React,{Component} from "react";
import {BrowserRouter as Router, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class Header extends Component{
    constructor(){
        super()
    }
    render(){ 
        return(
          <Navbar bg="light" expand="lg">
      
        <Navbar.Brand href="#home">COVID-19</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Router>
          <Nav className="me-auto">
            <Link className="nav-link"to="/india">India</Link>
            <Link className="nav-link" to="/world">World</Link>
            
          </Nav>
          </Router>
        </Navbar.Collapse>
      
    </Navbar>
        )
    }
}
export default Header