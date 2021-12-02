import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import yoga_default_image from "../../assets/yoga_default_image.jpeg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const MainContainer = styled.div`
  padding-top: 100px;
  padding-bottom: 40px;
  background-color: #9fc3d7;
  min-height: 96vh;
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

const Yoga = (props) => {
  return (
    <MainContainer>
      <TitleContainer>
        Voici la liste des cours de yoga mis à disposition
      </TitleContainer>
      <InfoContainer>
        <Card
          style={{
            width: "18rem",
            boxShadow: " 0px 26px 70px rgba(0, 0, 0, 0.15)",
            borderRadius: "20px",
          }}
        >
          <Card.Img
            style={{
              borderRadius: "20px 20px 12px 12px",
              boxShadow: " 0px 26px 70px rgba(0, 0, 0, 0.15)",
            }}
            variant="top"
            src={yoga_default_image}
          />
          <Card.Body>
            <Card.Title>Cours du 15 Octobre 2021</Card.Title>
            <Card.Text>
              Cours de yoga qui travaille sur blablablablablablablab et blublu
              blibli et voila voili c'est comme ça.
            </Card.Text>
            <Card.Text>Prix: 9€</Card.Text>
            <Button variant="primary">Acheter ce cours</Button>
          </Card.Body>
        </Card>
      </InfoContainer>
    </MainContainer>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Yoga);
