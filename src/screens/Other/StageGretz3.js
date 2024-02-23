import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import StageFev from "../../assets/StageFev24.png";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdEuroSymbol } from "react-icons/md";
import { GoLocation, GoTriangleRight } from "react-icons/go";
import Button from "react-bootstrap/Button";
import { useMediaQuery } from "react-responsive";
import ModalSubscribe from "./ModalSubscribe";
import SentSubscribeModal from "./SentSubscribeModal";

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
  color: #415051;
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
  color: #415051;
  padding: ${(props) => (props.isMobile ? "30px 30px 0 30px" : "30px 80px")};
  text-align: justify;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: ${(props) => (props.isMobile ? "wrap" : "")};
  color: #415051;
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
  font-weight: 500;
  color: #415051;
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
              marginTop: 90,
              backgroundImage: ` url(${StageFev})`,
              width: "100%",
              height: "70vh",
              backgroundSize: "cover",
              backgroundPosition: isMobile ? "center" : "center -350px",
            }}
          ></div>
        </div>
      </Fade>

      <Content isMobile={isMobile}>
        <ArticleContainer isMobile={isMobile}>
          <TitleContainer>Retraite YogaPsy : Ouverture du coeur</TitleContainer>
          <SubTitleContainer>Au Centre Védique de Gretz</SubTitleContainer>
          <SubTitleContainer>
            Du vendredi 12 au dimanche 14 avril 2024
          </SubTitleContainer>
          <SubTitleContainer>
            Animée par <b>Frédérique Saillard</b>, Praticienne en psychothérapie
            et en yogathérapie
          </SubTitleContainer>
          <SubTitleContainer>
            Inscription par mail :{" "}
            <a href="mailto:frederique@yogapsy.fr">
              <b>frederique@yogapsy.fr</b>
            </a>
          </SubTitleContainer>
          <p></p>
          <p>
            Ces week-ends , que j’appelle week-end YogaPsy, sont à la fois un
            travail avec :
            <br />
            <ul>
              <li>des asanas, postures de yoga simple et profondes.</li>
              <li>
                du pranayamas, exercices de respirations et connexions au
                souffle de vie
              </li>
              <li>
                des temps d’enseignements sur la philosophie du yoga, des temps
                de silence et réflexions personnel pour l’épanouissement de
                l’esprit .
              </li>
              <li>
                des temps de relaxations méditations, connexion à notre âme.
              </li>
            </ul>
          </p>
          <p>Nous serons hébergés sur place dans des chambres doubles .</p>
          <p>Rares possibilités d’avoir une chambre simple.</p>
          <p>
            Repas végétariens. Nous participons librement, à la vie du centre
            par notre seva, aide à la vaisselle, épluchage des légumes …comme
            dans les ashrams en Inde.
          </p>
          <p>
            Nous pratiquons matin et fin d’après midi des postures de yoga. Les
            temps d’enseignements sont dans la matinée. Temps de silence en
            début d’après-midi. Deux méditations par jour. Partage satsang après
            le dîner.
          </p>
          <p>
            Je vous attends à partir de 17h le jeudi 11 avril. Le week-end se
            terminera en début d’après midi dimanche.
          </p>

          <p>
            Le week-end YogaPsy commence à se remplir, réservez vite votre
            place.
          </p>

          <p>
            Je suis disponible pour échanger par mail{" "}
            <a href="mailto:frederique@yogapsy.fr">
              <b>frederique@yogapsy.fr</b>
            </a>{" "}
            ou sur what app 06 09 36 88 44 pour répondre à vos questions.
          </p>
          <p>
            <b>Informations pratiques :</b>
          </p>
          <p>
            <b>Lieu</b> : L’ashram de Gretz ou centre védique (64 boulevard
            Victor Hugo, 77220 Gretz, France.) est situé à 30km de Paris (est).
            Il est facilement accessible en : RER E (gare Haussman St-Lazare -
            gare du Nord) TGV (gare Marne-la-Vallée) ou VOITURE (autoroute A4){" "}
          </p>
          <p>
            <b>Venir en RER</b> : par la ligne E depuis Paris, au départ de la
            Gare Haussman-St Lazare ou de la station Magenta-Gare du Nord,
            prendre la direction de Tournan. En descendant à
            Gretz-Armainvilliers, emprunter la passerelle « sortie rue d’Alsace
            ». Une fois sur la rue d’Alsace, dirigez-vous pendant 50 mètres vers
            la droite à travers le parking jusqu’au Bd Romain Rolland. Le Centre
            se trouve à 10 mn à pied de la gare.
          </p>

          <p>
            <b>Venir en voiture</b> : au départ de Paris, prendre l’autoroute A4
            (direction Metz-Nancy) sur une vingtaine de km jusqu’à la sortie
            Gretz/Tournan (D471). Continuer sur cette route pendant une dizaine
            de km. Puis prenez la direction « Gretz centre » au 2ème feu
            (ignorez la direction au 1er feu). Le Centre est situé sur la gauche
            après l’entrée de la ville, au 64 bd Victor Hugo. Entrée et parking
            au 1 bd Romain Rolland
          </p>

          <p>
            <b>Tarif</b>
          </p>
          <p>
            <p>
              <b>Forfaits pour cette retraite de 3 jours</b> : 350 €
            </p>
            <p>
              <b>Forfaits hébergement </b> par personne en pension complète avec
              draps et serviette fournis : 70€ par jour et par personne soit 210
              € les trois jour, à régler en chèque le jour de la retraite.
              Chambre à 2 ou 3 Personnes. Cuisine Végétarienne.
            </p>
            {/* 
            <Button
              id="primary-btn"
              variant="primary"
              onClick={handleShowModal}
            >
              Je m'inscris
            </Button> */}
          </p>
        </ArticleContainer>
        <SideBar>
          {" "}
          {/* <Button id="primary-btn" variant="primary" onClick={handleShowModal}>
            Je m'inscris
          </Button> */}
          <Date>
            {" "}
            <AiOutlineCalendar style={{ width: "20px", height: "20px" }} />{" "}
            <b>12,13,14 avril 2024</b>
          </Date>
          <Date>
            <GoLocation style={{ width: "20px", height: "20px" }} />{" "}
            <div style={{ textAlign: "left" }}>
              <b>
                Centre Védique de Gretz <br /> 77220 Gretz
              </b>
            </div>
          </Date>
          <Date>
            <GoTriangleRight style={{ width: "20px", height: "20px" }} />
            <div style={{ textAlign: "left" }}>
              <b>Accès en RER E</b>
            </div>
          </Date>
          <Date>
            <MdEuroSymbol style={{ width: "20px", height: "20px" }} />
            <div>
              <div style={{ textAlign: "left" }}>
                <b>Forfait Retraite : 350€ à régler à l'inscription.</b>
              </div>
            </div>
          </Date>
          <Date>
            <MdEuroSymbol style={{ width: "3rem", height: "3rem" }} />
            <div style={{ textAlign: "left" }}>
              <b>
                Forfait hébergement en pension complète : 210€ en chambre 2/3
                personnes à régler sur place.
              </b>
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
