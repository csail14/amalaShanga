import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Orders from "./TabComponent/orders";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Classes from "./TabComponent/Yoga/classes";
import Activites from "./TabComponent/activities";
import { useMediaQuery } from "react-responsive";

const MainContainer = styled.div`
  padding-top: ${(props) => (props.isMobile ? "" : "100px")};
  padding-bottom: 40px;
  min-height: 96vh;
`;

const TitleContainer = styled.p`
  color: white;
  font-weight: 700;
  font-size: 32px;
`;

const Home = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 975px)" });
  return (
    <MainContainer isMobile={isMobile}>
      <TitleContainer>Bienvenue sur votre page admin </TitleContainer>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Cours">
          <Classes />
        </Tab>
        <Tab eventKey="profile" title="Autres activités">
          <Activites />
        </Tab>
        <Tab eventKey="other" title="Commandes">
          <Orders />
        </Tab>
      </Tabs>
    </MainContainer>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
