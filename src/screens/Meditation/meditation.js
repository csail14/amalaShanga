import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import meditation from "../../assets/meditation.jpeg";

const MainContainer = styled.div`
  padding-top: 100px;
  padding-bottom: 40px;
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
      <TitleContainer>
        Ici lien vers la meditation tous les lundi à 19h
      </TitleContainer>
      <InfoContainer>
        <img
          style={{ borderRadius: "12px", maxHeight: "400px", margin: "40px" }}
          src={meditation}
          alt="meditation_illu"
        />
        <TextContainer>Lien ici</TextContainer>
      </InfoContainer>
    </MainContainer>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
