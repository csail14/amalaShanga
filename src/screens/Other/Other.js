import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import yoga_default_image from "../../assets/yoga_default_image.jpeg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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

const Other = (props) => {
  return (
    <MainContainer>
      <TitleContainer>
        Voici la liste des cours de yoga mis à disposition
      </TitleContainer>
      <InfoContainer>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={yoga_default_image} />
          <Card.Body>
            <Card.Title>Stage de Yoga du 20 au 25 Novembre 2021</Card.Title>
            <Card.Text>
              Cours de yoga qui travaille sur blablablablablablablab et blublu
              blibli et voila voili c'est comme ça.
            </Card.Text>
            <Card.Text>Prix: 150€</Card.Text>
            <Button variant="primary">S'inscrire à ce stage</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Other);
