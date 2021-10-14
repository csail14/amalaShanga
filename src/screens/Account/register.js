import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const MainContainer = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
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
      <TitleContainer>Creez votre compte Amala Sangha</TitleContainer>
      <SubTitleContainer>
        Votre compte vous permettera, une fois votre cotisation annuelle réglée,
        de choisir vos cours de yoga en ligne parmis une sélection proposée au
        tarif préferentiel de 9 euros par cours, et d'acceder gratuitement à la
        méditation en ligne hebdomadaire.
      </SubTitleContainer>
      <InfoContainer>
        <Form>
          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" placeholder="Entrer votre nom" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label>Prénom</Form.Label>
            <Form.Control type="text" placeholder="Entrer votre prénom" />
          </Form.Group>
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
          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label>Date de naissance JJ/MM/AA</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrer votre date de naissance"
            />
            <Form.Text className="text-muted">
              Cette information non obligatoire a pour but d'adapter nos cours à
              nos élèves.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Ajouter une photo</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Créer mon compte
          </Button>
        </Form>
      </InfoContainer>
    </MainContainer>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
