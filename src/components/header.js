import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo_amala from "../assets/logoYogaPsy.png";

const Header = (props) => {
  return (
    <header
      className="header"
      style={{
        backgroundColor: "#385E70",
      }}
    >
      <Navbar
        collapseOnSelect
        fixed="top"
        variant="light"
        expand="lg"
        className="color-nav"
      >
        <Container
          style={{
            marginRight: 0,
            marginLeft: 0,
            minWidth: "-webkit-fill-available",
          }}
        >
          <Navbar.Brand>
            <Link to="/home">
              <img
                style={{ maxWidth: "200px", maxHeight: "65px" }}
                src={logo_amala}
                alt="logo_amala"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse collapseOnSelect id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                eventKey="1"
                className="header-link"
                as={Link}
                to="/home"
              >
                Accueil
              </Nav.Link>
              <Nav.Link
                eventKey="2"
                className="header-link"
                as={Link}
                to="/yoga"
              >
                Cours de Yoga
              </Nav.Link>
              <Nav.Link
                eventKey="3"
                className="header-link"
                as={Link}
                to="/stage"
              >
                Stages
              </Nav.Link>
              <Nav.Link
                eventKey="4"
                className="header-link"
                as={Link}
                to="/meditation"
              >
                Meditation
              </Nav.Link>
              <Nav.Link
                href="https://www.yogapsy.fr/"
                target="_blank"
                className="header-link"
              >
                Yoga Psy
              </Nav.Link>
            </Nav>
            <Nav>
              {props.user && !props.user.isLogged && (
                <Nav.Link
                  className="header-link"
                  eventKey="5"
                  as={Link}
                  to="/login"
                >
                  Se connecter
                </Nav.Link>
              )}
              {props.user && !props.user.isLogged && (
                <Nav.Link
                  eventKey="6"
                  className="header-link"
                  as={Link}
                  to="/register"
                >
                  Creer un compte
                </Nav.Link>
              )}
              {props.user && props.user.isLogged && (
                <Nav.Link
                  eventKey="7"
                  className="header-link"
                  as={Link}
                  to="/myAccount"
                >
                  Mon compte
                </Nav.Link>
              )}
              <Nav.Link
                eventKey="8"
                className="header-link"
                as={Link}
                to="/contact"
              >
                Contact
              </Nav.Link>

              {props.user && props.user.isLogged && (
                <Nav.Link
                  className="header-link"
                  eventKey="9"
                  as={Link}
                  to="/basket"
                  style={{ flexWrap: "nowrap" }}
                >
                  Mon panier{" "}
                  {props.basket.products.length > 0 ? (
                    <bold
                      style={{
                        border: "2px solid white",
                        padding: "2px 8px",
                        borderRadius: "50%",
                        fontWeight: 700,
                      }}
                    >
                      {props.basket.products.length}
                    </bold>
                  ) : (
                    ""
                  )}
                </Nav.Link>
              )}
              {props.user && props.user.isLogged && (
                <Nav.Link className="header-link" as={Link} to="/logout">
                  Se deconnecter
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return { user: store.user, basket: store.basket };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
