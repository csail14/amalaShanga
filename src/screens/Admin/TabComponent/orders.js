import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { FaTrash, FaPen } from "react-icons/fa";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import YogaOrders from "./YogaOrders/yogaOrders";
const SubTitleContainer = styled.p`
  color: grey;
  font-weight: 700;
  font-size: 20px;
  text-align: left;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #f8f9fa;
  margin: 10px 50px;
  color: white;
  border: 0.5px solid white;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
`;

const InfoDetailsContainer = styled.div`
  margin: 8px;
  padding: 10px;
`;
const AllInfoDetailsContainer = styled.div`
  display: flex;
  border-radius: 12px;
  background-color: white;
  margin: 5px 0;
  color: grey;
  border: 0.5px solid grey;
`;
const Orders = (props) => {
  return (
    <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Cours">
        <YogaOrders />
      </Tab>
      <Tab eventKey="profile" title="Autres activités"></Tab>
    </Tabs>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
