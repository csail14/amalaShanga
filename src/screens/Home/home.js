import React, { useState, useEffect, useReducer } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import home_illu from "../../assets/home_illu.jpeg";
import { getStart } from "../../utils/API/API";
const MainContainer = styled.div`
  padding-top: 100px;
  padding-bottom: 40px;
  background-color: #9fc3d7;
  min-height: 80vh;
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
  useEffect(() => {
    getStart();
  }, []);
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
          Amala Sangha est une association qui propose pour vous accompagner
          dans les 3 dimensions de l’être : corps , âme, esprit. Le corps et
          l’esprit sont au service de notre âme, de notre Soi pour aller vers
          plus de rayonnement. Grâce ses activités, Amala Sangha peut soutenir
          une école en Inde, La petite école de Prema
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
