import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { FaTrash, FaPen } from "react-icons/fa";

const SubTitleContainer = styled.p`
  color: grey;
  font-weight: 700;
  font-size: 20px;
  text-align: left;
`;

const InfoContainer = styled.div`
  display: flex;
  min-height: 96vh;
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
  display: flex;
  border-radius: 12px;
  background-color: white;
  margin: 5px 0;
  color: grey;
  border: 0.5px solid grey;
`;
const Classes = (props) => {
  return (
    <InfoContainer>
      <SubTitleContainer>Les cours </SubTitleContainer>
      <AllInfoDetailsContainer className="onHoverIsBorderGrey">
        <InfoDetailsContainer>
          <b>Image:</b>{" "}
          {/* <img
              style={{
                borderRadius: "50%",
                maxHeight: "200px",
                margin: "20px",
              }}
              src={fred}
              alt="home_illu"
            /> */}
        </InfoDetailsContainer>
        <InfoDetailsContainer>
          <b>Nom:</b> Cours du 21 octobre
        </InfoDetailsContainer>
        <InfoDetailsContainer>
          <b>Description:</b> Cours de yoga qui travaille sur
          blablablablablablablab et blublu blibli et voila voili c'est comme ça.
        </InfoDetailsContainer>
        <InfoDetailsContainer>
          <b>Lien:</b>{" "}
          https://www.youtube.com/watch?v=Ev_yr1lPWJI&ab_channel=yogapsy
        </InfoDetailsContainer>
        <InfoDetailsContainer>
          <b>Etat:</b> En ligne
        </InfoDetailsContainer>
        <InfoDetailsContainer>
          <b>Prix:</b> 9€
        </InfoDetailsContainer>
        <InfoDetailsContainer>
          <FaTrash />
          <FaPen />
        </InfoDetailsContainer>
      </AllInfoDetailsContainer>
      <AllInfoDetailsContainer className="onHoverIsBorderGrey">
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
      <AllInfoDetailsContainer className="onHoverIsBorderGrey">
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
      <AllInfoDetailsContainer className="onHoverIsBorderGrey">
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
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Classes);
