import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import meditation from "../../assets/meditation.jpeg";
import Button from "react-bootstrap/Button";
import { getActivitiesById } from "../../utils/API/activitiesApi";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 40px;
  min-height: 96vh;
`;

const TitleContainer = styled.p`
  color: white;
  font-weight: 700;
  font-size: 32px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const TextContainer = styled.div`
  padding: 30px;
  color: white;
  font-size: 20px;
`;
const Home = (props) => {
  const [meditationUrl, setMeditationUrl] = useState("");

  useEffect(() => {
    getActivitiesById(1).then((res) => {
      setMeditationUrl(res?.result?.url);
    });
  }, []);
  return (
    <MainContainer
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${meditation})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <TitleContainer>Suivez la méditation du mois</TitleContainer>
      <InfoContainer>
        <TextContainer>
          <Link
            to={{
              pathname: "studio",
              state: {
                url: meditationUrl,
              },
            }}
          >
            {" "}
            <Button id="primary-btn" variant="primary">
              Je medite
            </Button>
          </Link>
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
