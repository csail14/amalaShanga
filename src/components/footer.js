import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import rameauxverts from "../assets/rameauxverts.gif";
import yogapsy from "../assets/yogapsy.png";
import yogaprasad from "../assets/yogaprasad.webp";
import auroville from "../assets/auroville.png";

const CopyrightContainer = styled.div`
  color: white;
  font-size: 12px;
`;

const FooterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  text-align: left;
`;
const PartnerContainer = styled.div`
  display: flex;
  align-items: center;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="footer">
        <Navbar bg="dark" variant="light" style={{ display: "block" }}>
          <Container>
            <FooterInfoContainer>
              Nos Partenaires
              <PartnerContainer>
                <Navbar.Brand href="https://www.yogapsy.fr/" target="_blank">
                  <img
                    style={{
                      maxWidth: "200px",
                      background: "#E38D02",
                      borderRadius: "12px",
                    }}
                    src={yogapsy}
                    alt="logo_yogapsy"
                  />
                </Navbar.Brand>
                <Navbar.Brand href="https://yogaprasad.in/" target="_blank">
                  <img
                    style={{
                      maxWidth: "200px",
                      background: "white",
                      padding: "20px",
                      borderRadius: "12px",
                    }}
                    src={yogaprasad}
                    alt="logo_prasad"
                  />
                </Navbar.Brand>
                <Navbar.Brand href="http://rameauxverts.org/" target="_blank">
                  <img
                    style={{ maxWidth: "200px", borderRadius: "12px" }}
                    src={rameauxverts}
                    alt="logo_rameauxverts"
                  />
                </Navbar.Brand>
                <Navbar.Brand>
                  <img
                    style={{ maxWidth: "200px", borderRadius: "12px" }}
                    src={auroville}
                    alt="logo_auroville"
                  />
                </Navbar.Brand>
              </PartnerContainer>
            </FooterInfoContainer>
          </Container>
          <Container>
            <CopyrightContainer>
              © Copyright 2021 AmalaSangha
            </CopyrightContainer>
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
