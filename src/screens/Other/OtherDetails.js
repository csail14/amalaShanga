import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import stageAuvergne1 from "../../assets/stageAuvergne1.jpg";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdEuroSymbol } from "react-icons/md";
import { GoHome, GoLocation, GoTriangleRight } from "react-icons/go";
import Button from "react-bootstrap/Button";
import { useMediaQuery } from "react-responsive";
import ModalSubscribe from "./ModalSubscribe";
import SentSubscribeModal from "./SentSubscribeModal";

const MainContainer = styled.div`
  margin-top: ${(props) => (props.isMobile ? "" : "250px")};
  margin-bottom: 40px;
  margin-left: 30px;
  margin-right: 30px;
  background: #00000033;
`;

const TitleContainer = styled.p`
  color: white;
  font-weight: 700;
  font-size: 32px;
  text-align: left;
`;
const DetailsContainer = styled.p`
  color: white;
  font-size: 20px;
  text-align: left;
`;
const SubTitleContainer = styled.p`
  font-size: 22px;
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
              flexDirection: "column",
              justifyContent: "center",
              maxHeight: "50%",
              backgroundImage: ` url(${stageAuvergne1})`,
              backgroundSize: "cover",
              backgroundPosition: isMobile ? "center" : "center -591px",
              marginTop: 90,
            }}
          >
            <MainContainer isMobile={isMobile}>
              <TitleContainer>
                Retraite de Yoga en Auvergne
                <SubTitleContainer>
                  Du Jeudi 16 juin soir au Dimanche 19 juin 2022
                </SubTitleContainer>
              </TitleContainer>
              <DetailsContainer>Yoga – Méditation – Marche</DetailsContainer>
              <TextContainer>
                Initiation à une autre philosophie de vie : « La Philosophie du
                Yoga ou l’art de la transformation du moi vers l’émergence du
                SOI »
              </TextContainer>
            </MainContainer>
          </div>
        </div>
      </Fade>

      <Content isMobile={isMobile}>
        <ArticleContainer isMobile={isMobile}>
          Le yoga n’est pas une simple « gymnastique douce ». La pratique des
          postures ou asanas, s’inscrit dans une vaste philosophie de vie dont
          nous explorons les fondamentaux tout en marchant dans la belle nature
          de la Haute Vallée de l'Allier. Au programme de ce week-end de Yoga :
          <ul>
            <li>
              Jeudi :
              <ul>
                <li>Accueil à partir de jeudi 16 juin 17h.</li>
                <li>19h pratique Yoga / Méditation suivi du diner à 20h</li>
              </ul>
            </li>
            <li>
              Vendredi et samedi :
              <ul>
                <li>8h – 9h30 : Yoga / Méditation</li>
                <li>9h30 – 10h30 : Petit déjeuner</li>
                <li>11h : départ Marche / Pique-nique</li>
                <li>
                  15h : Enseignement sur la philosophie du Yoga en extérieur.
                </li>
                <li>18h : Yoga/ Méditation suivi du diner à 20h.</li>
              </ul>
            </li>
            <li>
              Dimanche :
              <ul>
                <li>8h – 9h30 : Yoga / Méditation</li>
                <li>9h30 – 10h30 : Petit déjeuner</li>
                <li>11h : Enseignement/ Bilan du weekend.</li>
                <li>12h30 : déjeuner.</li>
                <li>14h : Marche pour ceux qui peuvent rester un peu.</li>
              </ul>
            </li>
          </ul>
          <p>Lieu : Pruneyrolles. 43380 Villeneuve d’allier </p>
          {/* <p><a href="https://www.airbnb.fr/rooms/17870638?guests=1&adults=1&s=67&unique_share_id=264363ce-0708-443a-a1a1-2bb0c786ea03" target:"_blank"> Hébergement : au gîte Clément à Pruneyrolles</a></p> */}
          <p>
            Accès en train gare Brioude. Je viendrai vous chercher à la gare.
          </p>
          <p>
            Tarif pour cette retraite de 3 jours hébergement et repas compris.
            <ul>
              <li>En dortoir de 4/5 personnes 275€/personne</li>
              <li>En chambre double 300€ / personne</li>
              <li>En chambre simple 400€ /personne </li>
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
            <AiOutlineCalendar /> 16 - 10 juin 2022
          </Date>
          {/* <Date>
            {" "}
            <MdEuroSymbol /> 200 €
          </Date> */}
          {/* <Date>
            {" "}
            <MdEuroSymbol />{" "} */}
          <Date>
            <GoLocation />{" "}
            <div style={{ textAlign: "left" }}>
              Pruneyrolles. 43380 Villeneuve d’allier
            </div>
          </Date>
          <Date>
            <GoTriangleRight />
            <div style={{ textAlign: "left" }}>
              Accès en train gare "Brioude". Je viendrai vous chercher à la
              gare.
            </div>
          </Date>
          <Date>
            <GoHome />
            <div style={{ textAlign: "left" }}>
              {/* <a ref="https://www.airbnb.fr/" target="_blank">
                Gite Clément
              </a> */}
            </div>
          </Date>
          <Date>
            <MdEuroSymbol />
            <div>
              <div style={{ textAlign: "left" }}>
                En dortoir de 4/5 p. 275€/p
              </div>
              <div style={{ textAlign: "left" }}>En chambre double 300€/p</div>
              <div style={{ textAlign: "left" }}>En chambre simple 400€/p</div>
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
