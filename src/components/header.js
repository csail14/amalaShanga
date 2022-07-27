import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo_amala from "../assets/logo_amala.png";

const Header = (props) => {
  return (
    <header
      className="header"
      style={{
        backgroundColor: "#9ec2d7",
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
                style={{ maxWidth: "200px" }}
                src={logo_amala}
                alt="logo_amala"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse collapseOnSelect id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="header-link" href="/home">
                Accueil
              </Nav.Link>
              <Nav.Link className="header-link" href="/yoga">
                Cours de Yoga
              </Nav.Link>
              <Nav.Link className="header-link" href="/stage">
                Stages
              </Nav.Link>
              <Nav.Link className="header-link" href="/meditation">
                Meditation
              </Nav.Link>
              <Nav.Link
                href="https://www.yogapsy.fr/28834-yogapsy-yoga-et-psychotherapie.php"
                target="_blank"
                className="header-link"
              >
                Yoga Psy
              </Nav.Link>
            </Nav>
            <Nav>
              {props.user && !props.user.isLogged && (
                <Nav.Link className="header-link" href="/login">
                  Se connecter
                </Nav.Link>
              )}
              {props.user && !props.user.isLogged && (
                <Nav.Link className="header-link" href="/register">
                  Creer un compte
                </Nav.Link>
              )}
              {props.user && props.user.isLogged && (
                <Nav.Link className="header-link" href="/myAccount">
                  Mon compte
                </Nav.Link>
              )}
              <Nav.Link className="header-link" href="/contact">
                Contact
              </Nav.Link>

              {props.user && props.user.isLogged && (
                <Nav.Link
                  className="header-link"
                  href="/basket"
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
                <Nav.Link className="header-link" href="/logout">
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
