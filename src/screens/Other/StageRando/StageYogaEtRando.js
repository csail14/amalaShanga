import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import stageAuvergne2 from "../../../assets/stage-yoga-rando.jpg";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdEuroSymbol, MdHome } from "react-icons/md";

import { GoLocation, GoTriangleRight } from "react-icons/go";
import Button from "react-bootstrap/Button";
import { useMediaQuery } from "react-responsive";
import ModalSubscribe from "./ModalSubscribe";
import SentSubscribeModal from "../SentSubscribeModal";

const MainContainer = styled.div`
  margin-top: ${(props) => (props.isMobile ? "" : "250px")};
  padding-bottom: 10px;
  padding-left: 30px;
  padding-right: 30px;
  background: #0000005e;
`;

const TitleContainer = styled.p`
  font-weight: 700;
  font-size: 32px;
  text-align: center;
`;
const DetailsContainer = styled.p`
  color: white;
  font-size: 20px;
  text-align: left;
`;
const SubTitleContainer = styled.div`
  font-size: 15px;
  text-align: center;
`;

const TextContainer = styled.div`
  color: white;
  text-align: left;
  font-size: 20px;
`;

const ArticleContainer = styled.div`
  color: black;
  padding: ${(props) => (props.isMobile ? "30px 30px 0 30px" : "30px 80px")};
  text-align: justify;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: ${(props) => (props.isMobile ? "wrap" : "")};
`;
const SideBar = styled.div`
  color: black;
  padding: 30px;
  min-width: 20%;
  text-align: center;
`;
const Date = styled.div`
  display: flex;
  justify-content: left;
  gap: 5%;
  margin: 20px 0;
  align-items: center;
  text-align: left;
`;

const Other = () => {
  const [showModal, setShowModal] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 975px)" });
  const handleClose = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const [showModalValidation, setShowModalValidation] = useState(false);
  const handleCloseValidation = () => setShowModalValidation(false);
  const handleShowModalValidation = () => setShowModalValidation(true);

  return (
    <div isMobile={isMobile}>
      <Fade arrows={false} easing="ease" autoplay={false}>
        <div className="each-slide">
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "500px",
              flexDirection: "column",
              marginTop: 90,
              maxHeight: "50%",
              backgroundImage: ` url(${stageAuvergne2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </Fade>

      <Content isMobile={isMobile}>
        <ArticleContainer isMobile={isMobile}>
          <TitleContainer>Retraite de Yoga et Randonnées</TitleContainer>
          <SubTitleContainer>A Pruneyrolles en Auvergne</SubTitleContainer>
          <SubTitleContainer>
            Le week-end des 1 er et 2 juillet 2023
          </SubTitleContainer>
          <SubTitleContainer>
            Animée par <b>Frédérique Saillard</b> - Yoga thérapeute
          </SubTitleContainer>
          <p></p>
          <p>
            Au programme <b>« yoga et randonnées »</b>. Un temps pour se
            synchroniser à la nature, s'émerveiller et se connecter en miroir à
            la merveille de notre nature véritable. <br />
            Yoga dynamique le matin, marche ( environ 3h en fonction du groupe)
            et pique nique avec enseignement, marche méditative, méditation,
            contemplation et yoga nidra et méditation en fin de journée.
            <br />
            <br />
            <p>Places limitées.</p>
          </p>

          <p>
            <b>Au programme chaque jour:</b>
          </p>

          <ul>
            <li>10h à 11h45 : Hathan -Yoga, Méditation</li>
            <li>
              11h45 : Départ à pied avec le déjeuner dans le sac. Randonnée,
              méditations, contemplations, relaxation en pleine nature de 12h à
              15h/16h
            </li>
            <li>17h à 18h Yoga Nidra</li>
          </ul>

          <p>
            <b>Lieu</b> :Pruneyrolles 43380 Villeneuve d’Allier
          </p>

          <b>Tarif</b>

          <p>
            <ul>
              <li>
                <p>
                  <b>Forfaits pour cette retraite de 2 jours</b> :
                  <ul>
                    <li>
                      200€ pour les membres de l'associtaion Amala Sangha à jour
                      de leur cotisation 2023 (20€).
                    </li>
                  </ul>
                </p>
              </li>
              <li>
                <p>
                  <b>Forfaits hébergement </b>
                  <ul>
                    <li>
                      35€ la nuit avec le petit déjeuner en chambre double
                      /triple
                    </li>
                    <li>100€ en chambre simple avec le petit déjeuner</li>
                  </ul>{" "}
                </p>
              </li>
            </ul>

            <Button
              id="primary-btn"
              variant="primary"
              onClick={handleShowModal}
            >
              Je m'inscris
            </Button>
          </p>
        </ArticleContainer>
        <SideBar>
          {" "}
          <Button id="primary-btn" variant="primary" onClick={handleShowModal}>
            Je m'inscris
          </Button>
          <Date>
            {" "}
            <AiOutlineCalendar style={{ width: "20px", height: "20px" }} /> 1,2
            juillet 2023
          </Date>
          <Date>
            <GoLocation style={{ width: "20px", height: "20px" }} />{" "}
            <div style={{ textAlign: "left" }}>
              Pruneyrolles 43380 Villeneuve d’Allier
            </div>
          </Date>
          <Date>
            <GoTriangleRight style={{ width: "20px", height: "20px" }} />
            <div style={{ textAlign: "left" }}>Accès en RER E</div>
          </Date>
          <Date>
            <MdEuroSymbol style={{ width: "20px", height: "20px" }} />
            <div>
              <div style={{ textAlign: "left" }}>
                Forfait Retraite : 200€ à régler à l'inscription.
              </div>
            </div>
          </Date>
          <Date>
            <MdHome style={{ width: "3rem", height: "3rem" }} />
            <div style={{ textAlign: "left" }}>
              35€ la nuit avec le petit déjeuner en chambre double /triple
              <br />
              100€ en chambre simple avec le petit déjeuner
            </div>
          </Date>
        </SideBar>
      </Content>
      <ModalSubscribe
        show={showModal}
        handleClose={handleClose}
        handleShow={handleShowModal}
        handleShowModalValidation={handleShowModalValidation}
      />
      <SentSubscribeModal
        show={showModalValidation}
        handleClose={handleCloseValidation}
        handleShow={handleShowModalValidation}
      />
    </div>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Other);
