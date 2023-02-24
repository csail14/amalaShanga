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
      <Tab eventKey="home" tabClassName="admin-tab" title="Cours">
        <YogaOrders />
      </Tab>
      <Tab
        eventKey="profile"
        tabClassName="admin-tab"
        title="Autres activités"
      ></Tab>
    </Tabs>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
