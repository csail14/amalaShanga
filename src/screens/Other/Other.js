import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import home_illu from "../../assets/home_illu.jpeg";

const MainContainer = styled.div`
  padding-top: 100px;
  background-color: #7dbce0;
  min-height: 70vh;
`;

const TitleContainer = styled.p`
  color: white;
  font-weight: 700;
  font-size: 32px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 50px;
`;
const TextContainer = styled.div`
  padding: 30px;
  color: white;
  font-size: 20px;
`;
const Home = (props) => {
  return (
    <MainContainer>
      <TitleContainer>Bienvenue sur le site de Amala Sangha !</TitleContainer>
      <InfoContainer>
        <img
          style={{ borderRadius: "300px", maxHeight: "400px", margin: "40px" }}
          src={home_illu}
          alt="home_illu"
        />
        <TextContainer>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </TextContainer>
      </InfoContainer>
    </MainContainer>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
