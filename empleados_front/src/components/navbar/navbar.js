import React from "react";
import { Container, Navbar, Nav, Dropdown, DropdownButton, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar fixed="top" id="navbar" bg="primary" variant="dark" expand="lg">
        <Container>
          <img className="img-logo" src="/empleados_front/src/Images/dhalis.svg" alt="logo"/>
          <Navbar.Brand href="#home">DHALIS MARKET <span id="usuario-sub-branm"></span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/*<Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>*/}
            </Nav>
            <DropdownButton id="dropdown-basic-button" title="Options">
              <Dropdown.Header>
                <Row>
                  <FontAwesomeIcon icon={faUserCircle}/>
                </Row>
                <Row>
                  USUARIO
                </Row>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item href="login.js">Home</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Register</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
