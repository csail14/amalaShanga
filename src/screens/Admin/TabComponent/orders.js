import React from "react";
import { connect } from "react-redux";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import YogaOrders from "./YogaOrders/yogaOrders";

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
