import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import styled from "styled-components"

import logo from "../images/logo-white.png"

const Styled = styled.div`
  .nav-link {
    color: white !important;
    padding-right: 25px !important;
    padding-left: 25px !important;
  }
  .nav-link:hover {
    color: grey !important;
  }
  .navbar {
    background-color: transparent;
    position: absolute;
    top: 0;
    z-index: 1;
    color: white;
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    .navbar {
      background-color: #4a2e6f;
      position: static;
      color: black;
    }
  }
`

const Header = () => {
  return (
    <Styled>
      <Navbar variant="dark" expand="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Link className="ml-auto" to="/">
          <Navbar.Brand>
            <img
              alt="logo brand"
              src={logo}
              height="40"
              className="d-inline-block my-auto"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Collapse>
          <Nav className="mx-auto m0">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </Nav>
          <Nav>
            <Link className="btn btn-danger" to="/contact">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styled>
  )
}

export default Header
