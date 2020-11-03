import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import styled from "styled-components"

import logo from "../images/logo.png"

const Styled = styled.div`
  .nav-link {
    color: black !important;
    padding-right: 25px !important;
    padding-left: 25px !important;
  }
  .nav-link:hover {
    color: grey !important;
  }
`

const Header = () => {
  return (
    <Styled>
      <Navbar expand="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Link className="ml-auto" to="/">
          <Navbar.Brand>
            <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block mt-3"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Collapse>
          <Nav className="mx-auto">
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
