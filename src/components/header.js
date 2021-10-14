import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo_amala from "../assets/logo_amala.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <Navbar fixed="top" bg="light" variant="light">
          <Container>
            <Navbar.Brand>
              <Link to="/home">
                <img
                  style={{ maxWidth: "200px" }}
                  src={logo_amala}
                  alt="logo_amala"
                />
              </Link>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>
                <Link className="header-link" to="/home">
                  Accueil
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="header-link" to="/">
                  Cours de Yoga
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="header-link" to="/">
                  Yoga Psy
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="header-link" to="/">
                  Meditation
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="header-link" to="/">
                  Autres activités
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <Link className="header-link" to="/home">
                  Se connecter
                </Link>
              </Nav.Link>
              {/* <Nav.Link>
                <Link className="header-link" to="/home">
                  Mon compte
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="header-link" to="/home">
                  Panier
                </Link>
              </Nav.Link> */}
            </Nav>
          </Container>
        </Navbar>
      </header>
    );
  }
}

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
