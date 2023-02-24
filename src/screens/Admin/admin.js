import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Orders from "./TabComponent/orders";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Classes from "./TabComponent/YogaReplay/classes";
import Meditation from "./TabComponent/Meditation";
import { useMediaQuery } from "react-responsive";
import Members from "./TabComponent/Members/Members";
import YogaDirectList from "./TabComponent/YogaDirect/YogaDirectList";
import Wiki from "./TabComponent/Wiki/Wiki";

const MainContainer = styled.div`
  padding-top: ${(props) => (props.isMobile ? "100px" : "100px")};
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
        <Tab
          tabClassName="admin-tab"
          eventKey="home"
          title="Cours en replay"
          style={{ color: "red" }}
        >
          <Classes />
        </Tab>
        <Tab
          tabClassName="admin-tab"
          eventKey="direct"
          title="Cours en direct"
          style={{ color: "red" }}
        >
          <YogaDirectList />
        </Tab>
        <Tab tabClassName="admin-tab" eventKey="profile" title="Méditation">
          <Meditation />
        </Tab>
        <Tab tabClassName="admin-tab" eventKey="other" title="Commandes">
          <Orders />
        </Tab>
        <Tab tabClassName="admin-tab" eventKey="users" title="Membres">
          <Members />
        </Tab>
        <Tab tabClassName="admin-tab" eventKey="wiki" title="Comment faire ?">
          <Wiki />
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
