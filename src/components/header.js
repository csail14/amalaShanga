import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo_amala from "../assets/logo_amala.png";
import { useMediaQuery } from "react-responsive";

const Header = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 975px)" });
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
            marginLeft: isMobile ? "10px" : "60px",
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
              <Nav.Link>
                <Link className="header-link" to="/home">
                  Accueil
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="header-link" to="/yoga">
                  Cours de Yoga
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="header-link" to="/stage">
                  Stages
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="header-link" to="/meditation">
                  Meditation
                </Link>
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
                <Nav.Link>
                  <Link className="header-link" to="/login">
                    Se connecter
                  </Link>
                </Nav.Link>
              )}
              {props.user && !props.user.isLogged && (
                <Nav.Link>
                  <Link className="header-link" to="/register">
                    Creer un compte
                  </Link>
                </Nav.Link>
              )}
              {props.user && props.user.isLogged && (
                <Nav.Link>
                  <Link className="header-link" to="/myAccount">
                    Mon compte
                  </Link>
                </Nav.Link>
              )}
              <Nav.Link>
                <Link className="header-link" to="/contact">
                  Contact
                </Link>
              </Nav.Link>

              {props.user && props.user.isLogged && (
                <Nav.Link>
                  <Link
                    className="header-link"
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
                  </Link>
                </Nav.Link>
              )}
              {props.user && props.user.isLogged && (
                <Nav.Link>
                  <Link className="header-link" to="/logout">
                    Se deconnecter
                  </Link>
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
