import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getAllYogaOrderWithProductDetails } from "../../../../utils/API/orderApi";
import { useMediaQuery } from "react-responsive";
import moment from "moment";

const SubTitleContainer = styled.p`
  color: grey;
  font-weight: 700;
  font-size: 20px;
  text-align: left;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 96vh;
  flex-direction: column;
  background: #f8f9fa;
  margin: ${(props) => (props.isMobile ? "" : "10px 50px")};
  color: white;
  border: 0.5px solid white;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
`;

const InfoDetailsContainer = styled.div`
  margin: 8px;
  padding: 10px;
  text-align: left;
`;

const AllInfoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 12px;
  background-color: white;
  margin: 5px 0;
  color: grey;
  border: 0.5px solid grey;
`;

const Wiki = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 975px)" });

  return (
    <InfoContainer isMobile={isMobile}>
      <SubTitleContainer>Comment faire ? </SubTitleContainer>

      <AllInfoDetailsContainer>
        <InfoDetailsContainer>
          <b>Ajouter un cours en replay: </b>
          <InfoDetailsContainer>
            Dans la section <b>Cours en replay</b>, cliquer sur le bouton
            "Ajouter un cours en replay" et remplir les champs. <br />
            Le champ pour youtube doit être{" "}
            <b>"https://www.youtube.com/embed/" + l'id de la video</b> trouvé
            sur Youtube (Appeler Camille si on ne sait plus ou est l'id).
            <br /> Le champ "Disponible" permet de mettre en ligne ou hors ligne
            ("Non Disponible") le cours. Si le cours est hors ligne, il
            n'apparaitra pas dans la page "Cours de Yoga"
          </InfoDetailsContainer>
        </InfoDetailsContainer>
      </AllInfoDetailsContainer>
      <AllInfoDetailsContainer>
        <InfoDetailsContainer>
          <b>Ajouter un cours en direct: </b>
          <InfoDetailsContainer>
            Dans la section <b>Cours en direct</b>, cliquer sur le bouton
            "Ajouter un cours en replay" et remplir les champs. <br />
            Le champ pour zoom doit être le lien zoom.
            <br />
            Une fois le cours ajouter il faut le programmer. Pour cela
            selectionner l'option "Cours en direct activé" puis choisir un cours
            et une date et une heure où aura lieu ce cours, puis enregister.{" "}
            <br />
            Une fois le cours activé le bouton d'inscription au cours en direct
            sera disponible sur la page d'acceuil du site.
          </InfoDetailsContainer>
        </InfoDetailsContainer>
      </AllInfoDetailsContainer>
      <AllInfoDetailsContainer>
        <InfoDetailsContainer>
          <b>Transformer un cours en direct en cours en replay: </b>
          <InfoDetailsContainer>
            Dans la section <b>Cours en direct</b>, choisir le cours à passer en
            replay. Cliquer sur le stylo à droite pour modifier le cours. <br />
            Changer l'url zoom pour la nouvelle url youtube. Le champ pour
            youtube doit être{" "}
            <b>"https://www.youtube.com/embed/" + l'id de la video</b> trouvé
            sur Youtube (Appeler Camille si on ne sait plus ou est l'id).
            <br />
            Remplacer l'option "cours en direct" par "cours en replay".
            Enregistrer.
            <br />
            Une fois le cours passé en replay, il sera disponible pour les
            personnes qui étaient inscrites au cours en direct dans leur
            rubrique mon compte. Et disponible à l'achat dans la page "Cours de
            Yoga" pour les autres.
          </InfoDetailsContainer>
        </InfoDetailsContainer>
      </AllInfoDetailsContainer>

      <AllInfoDetailsContainer>
        <InfoDetailsContainer>
          <b>Mettre à jour le lien de méditation: </b>
          <InfoDetailsContainer>
            Dans la section <b>Méditation</b>, remplacer l'url. <br />
            Le champ pour youtube doit être{" "}
            <b>"https://www.youtube.com/embed/" + l'id de la video</b> trouvé
            sur Youtube (Appeler Camille si on ne sait plus ou est l'id).
          </InfoDetailsContainer>
        </InfoDetailsContainer>
      </AllInfoDetailsContainer>

      <AllInfoDetailsContainer>
        <InfoDetailsContainer>
          <b>Quand est ce que mes élèves recoivent un mail ? </b>
          <InfoDetailsContainer></InfoDetailsContainer>
        </InfoDetailsContainer>
      </AllInfoDetailsContainer>
    </InfoContainer>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return { yogaClasses: store.yogaClasses };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wiki);
