import React,{useState} from "react";
import "../App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import { FaFreeCodeCamp } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import {RxHamburgerMenu} from 'react-icons/rx';

function NavBar() {


  var localStorageData = localStorage.getItem("myInfo");

  console.log(localStorageData);
  

  return (
    <div className="topNavbarDiv">
      <Navbar collapseOnSelect expand="lg" className="topNavbar" >
        <Container fluid={true} className="topNavbarContainer">
          <Nav>
            <InputGroup size="sm">
              <InputGroup.Text
                id="basic-addon1"
                className="searchBarIcon"
                style={{
                  backgroundColor: "rgba(59, 59, 78, 0.5)",
                  color: "white",
                  border: "none",
                }}
              >
                <FiSearch size="1.2em"/>
              </InputGroup.Text>
              <Form.Control
                className="searchBarInput"
                placeholder="Search 8000+ tutorials"
                aria-label="searchbar"
                aria-describedby="basic-addon1"
                style={{
                  backgroundColor: "rgba(59, 59, 78, 0.5)",
                  color: "white",
                  border: "none",
                  width:"15rem",
                }}
              />
            </InputGroup>
          </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{border:"none"}}><RxHamburgerMenu color="#fff" size="2rem" /></Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>

            <Nav className="me-auto">
            <Navbar.Brand>
              <span className="siteLogo">
              <Link to={"/"} style={{color:"white",textDecoration:"none"}}>freeCodeCamp
                  <FaFreeCodeCamp size="1.5em" /></Link>
                </span>
                
              </Navbar.Brand>
            </Nav>

            <Nav>
              <Nav.Link>
                <button className="menuBtn">Menu</button>
              </Nav.Link>
              { localStorageData != null ? <Nav.Link>
                <p style={{color:"white",fontSize:"1.2rem"}}>{JSON.parse(localStorageData).userData.name}</p>
              </Nav.Link>: <Nav.Link>
                <button className="signInBtn"><Link to={"/signin"} className="navLinks">Sign in</Link></button>
              </Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
