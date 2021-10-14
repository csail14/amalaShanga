import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const MainContainer = styled.div`
  padding-top: 100px;
  background-color: #7dbce0;
  min-height: 70vh;
`;

const TitleContainer = styled.p`
  color: white;
  font-weight: 700;
  font-size: 32px;
  text-align: center;
`;

const SubTitleContainer = styled.p`
  color: white;
  font-size: 18px;
  text-align: center;
  margin: 20px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 450px;
  color: white;
  border: 0.5px solid white;
  border-radius: 12px;
  padding: 12px;
`;

const Home = (props) => {
  return (
    <MainContainer>
      <TitleContainer>
        Connectez-vous à votre compte Amala Sangha pour accéder à vos contenus
      </TitleContainer>
      <InfoContainer>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Adresse Email</Form.Label>
            <Form.Control type="email" placeholder="Entrer votre email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Entrer votre mot de passe"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Se souvenir de moi " />
          </Form.Group>
          <Button variant="primary" type="submit">
            Connexion
          </Button>
        </Form>
      </InfoContainer>
      <SubTitleContainer>
        Pas encore membre ? <Link to="/register">Créez un compte</Link>
      </SubTitleContainer>
    </MainContainer>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
