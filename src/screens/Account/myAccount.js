import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import fred from "../../assets/fred.jpeg";
const MainContainer = styled.div`
  padding-top: 100px;
  padding-bottom: 40px;
  min-height: 96vh;
`;

const TitleContainer = styled.p`
  color: white;
  font-weight: 700;
  font-size: 32px;
`;

const SubTitleContainer = styled.p`
  color: black;

  font-size: 20px;
  text-align: left;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #f8f9fa;
  margin: 10px 50px;
  color: white;
  border: 0.5px solid white;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
`;

const InfoDetailsContainer = styled.div`
  margin: 8px;
  padding: 10px;
`;
const AllInfoDetailsContainer = styled.div`
  text-decoration: none;
  display: flex;
  border-radius: 12px;
  background-color: white;
  margin: 5px 0;
  color: grey;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
`;
const MyAccount = (props) => {
  const userDetails = props.user && props.user.infos;
  console.log(userDetails);
  return (
    <MainContainer>
      <TitleContainer>
        Bienvenue {userDetails && userDetails.firstName}{" "}
      </TitleContainer>
      <InfoContainer>
        <SubTitleContainer>Mes informations </SubTitleContainer>
        <AllInfoDetailsContainer style={{ justifyContent: "center" }}>
          <img
            style={{
              borderRadius: "50%",
              maxHeight: "200px",
              margin: "40px",
            }}
            src={fred}
            alt="home_illu"
          />
          <div>
            <InfoDetailsContainer>
              <b>Nom :</b> {userDetails && userDetails.lastName}
            </InfoDetailsContainer>
            <InfoDetailsContainer>
              <b>Prénom :</b> {userDetails && userDetails.firstName}
            </InfoDetailsContainer>
            <InfoDetailsContainer>
              <b>Email :</b> {userDetails && userDetails.email}
            </InfoDetailsContainer>
            <InfoDetailsContainer>
              <b>Cotisation à jour :</b>{" "}
              {userDetails && userDetails.isMember ? "Oui" : "Non"}
            </InfoDetailsContainer>
            <InfoDetailsContainer>
              <b>Date de naissance :</b>{" "}
              {userDetails && userDetails.birthdate
                ? new Date(userDetails.birthdate)
                : "Non renseignée"}
            </InfoDetailsContainer>
          </div>
        </AllInfoDetailsContainer>
        <div style={{ display: "flex", margin: "20px auto 10px auto" }}>
          <Button
            variant="primary"
            type="submit"
            id="primary-btn"
            style={{ width: "fit-content", margin: "5px" }}
          >
            Modifier mes informations
          </Button>
          <Button
            variant="primary"
            type="submit"
            id="primary-btn"
            style={{
              width: "fit-content",
              margin: "5px",
              backgroundColor: "#a4d5ff6b",
              border: "0",
            }}
          >
            Mettre à jour ma cotisation
          </Button>
        </div>
      </InfoContainer>
      <InfoContainer>
        <SubTitleContainer>Mes cours ou activités </SubTitleContainer>
        <Link to="studio">
          <AllInfoDetailsContainer className="onHoverIsGrey">
            <InfoDetailsContainer>
              <b>Nom :</b> Cours du 21 octobre
            </InfoDetailsContainer>
            <InfoDetailsContainer>
              <b>Date d'achat :</b> 30 Octobre 2021
            </InfoDetailsContainer>
            <InfoDetailsContainer>
              <b>Lien :</b> http://monlien.fr
            </InfoDetailsContainer>
            <InfoDetailsContainer>
              <b>Valide jusqu'au :</b> date
            </InfoDetailsContainer>
          </AllInfoDetailsContainer>
        </Link>
        <AllInfoDetailsContainer className="onHoverIsGrey">
          <InfoDetailsContainer>
            <b>Nom :</b> Cours du 21 octobre
          </InfoDetailsContainer>
          <InfoDetailsContainer>
            <b>Date d'achat :</b> 30 Octobre 2021
          </InfoDetailsContainer>
          <InfoDetailsContainer>
            <b>Lien :</b> http://monlien.fr
          </InfoDetailsContainer>
          <InfoDetailsContainer>
            <b>Valide jusqu'au :</b> date
          </InfoDetailsContainer>
        </AllInfoDetailsContainer>
        <AllInfoDetailsContainer className="onHoverIsGrey">
          <InfoDetailsContainer>
            <b>Nom :</b> Cours du 21 octobre
          </InfoDetailsContainer>
          <InfoDetailsContainer>
            <b>Date d'achat :</b> 30 Octobre 2021
          </InfoDetailsContainer>
          <InfoDetailsContainer>
            <b>Lien :</b> http://monlien.fr
          </InfoDetailsContainer>
          <InfoDetailsContainer>
            <b>Valide jusqu'au :</b> date
          </InfoDetailsContainer>
        </AllInfoDetailsContainer>
        <AllInfoDetailsContainer className="onHoverIsGrey">
          <InfoDetailsContainer>
            <b>Nom :</b> Cours du 21 octobre
          </InfoDetailsContainer>
          <InfoDetailsContainer>
            <b>Date d'achat :</b> 30 Octobre 2021
          </InfoDetailsContainer>
          <InfoDetailsContainer>
            <b>Lien :</b> http://monlien.fr
          </InfoDetailsContainer>
          <InfoDetailsContainer>
            <b>Valide jusqu'au :</b> date
          </InfoDetailsContainer>
        </AllInfoDetailsContainer>
      </InfoContainer>
    </MainContainer>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return { user: store.user };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);
