import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import stageGrece from "../../assets/stageGrece.png";
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
  height: 400px;
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
              width: "100%",
              height: "500px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              maxHeight: "50%",
              backgroundImage: ` url(${stageGrece})`,
              backgroundSize: "cover",
              //backgroundPosition: isMobile ? "center" : "center -591px",
              marginTop: 90,
            }}
          ></div>
        </div>
      </Fade>

      <Content isMobile={isMobile}>
        <ArticleContainer isMobile={isMobile}>
          <p>
            Retirez-vous loin du monde agité et venez pratiquer le yoga dans une
            île paradisiaque. Un temps pour se ressourcer dans la nature, nager
            dans la mer Egée, contempler la beauté des paysages, respirez la
            pureté de l’air, ressentir l’énergie tellurique et spirituelle de
            cette île, savourer une cuisine saine et délicieuse, tout en
            pratiquant le yoga et la méditation, accompagnée par mon amie Athéna
            , professeur de yoga à Patmos et moi-même.
          </p>
          <p>
            Vous allez vous laissez surprendre l'émerveillement et l'inspiration
            du lieu et redécouvrir que lorsque nous revenons à la nature, nous
            revenons à nous - mêmes !
          </p>
          <p>
            Nous passerons une grande partie de notre temps ensemble en
            communauté de yogis à profiter de méditations et du yoga quotidien
            qui ouvriront nos corps détendront nos esprits et nourrirons notre
            âme. En plus de nos pratiques quotidiennes, nous irons à la
            découverte de la beauté sacrée de Patmos pendant le séjour.
          </p>
          <h2 style={{ color: "#8dbad3", fontWeight: "bold" }}>
            Lieu de retraite :
          </h2>
          <p>
            Le magnifique{" "}
            <a href="https://9musespatmos.com">
              <b>https://9musespatmos.com</b>
            </a>{" "}
            sera notre hébergement durant cette semaine haute en couleur de
            nouvelles activités. Ce joyau caché surplombe la côte magique de la
            mer Égée sur l'île de Patmos. Vous pourrez se rafraîchir dans la
            piscine unique ou barboter dans l'eau de mer fraîche à moins d'un
            saut. Que vous recherchiez la détente et la tranquillité ou le
            rajeunissement, notre objectif est de vous faciliter le retour à la
            nature. Cet environnement inspirant et magnifique est un
            environnement côtier basé sur la nature qui améliore et nourrit
            notre corps, notre esprit et notre âme.
          </p>
          <p>La nourriture comme médicament :</p>
          <p>
            Les repas végétariens seront nutritifs et nourrissants ; préparés en
            grande partie à partir de fruits et légumes frais locaux de saison –
          </p>
          <h2 style={{ color: "#8dbad3", fontWeight: "bold" }}>
            Qui nous sommes:
          </h2>
          <p>
            Nous sommes deux professeurs de yoga enthousiastes qui aimons
            également explorer différents types de yoga. Notre enseignement
            intègre des éléments de Hatha et de Vinyasa créatif, en mettant
            l'accent sur le nettoyage et la libération de la stagnation du corps
            énergétique.
          </p>
          <p>
            Nous sommes passionnés par la vie, la vérité, la liberté et aidons
            les gens à se connecter avec leur corps, leur esprit et leur esprit
            d'une manière enrichissante et épanouissante.
          </p>
          <h2 style={{ color: "#8dbad3", fontWeight: "bold" }}>
            Prestations inclues au tarif du séjour
          </h2>
          <ul>
            <li>
              Séjour 6 nuits / 7 jours dans un cadre charmant et énergisant à
              Patmos
            </li>
            <li>Pratique quotidienne de Yoga/Méditation, matin & soir</li>
            <li>
              Apprenez à faire de l'exercice, à respirer, à vous détendre, à
              suivre un régime et à penser positivement
            </li>
            <li>
              Délicieuse cuisine végétarienne biologique. Petit déjeuner et
              dîner
            </li>
            <li>Transport vers et depuis le bateau</li>
            <li>Une petite surprise, qui vous attendra :-)</li>
          </ul>

          <h2 style={{ color: "#8dbad3", fontWeight: "bold" }}>
            Suppléments optionnels (payants):
          </h2>
          <ul>
            <li>Excursion, visite</li>
            <li>Location de voiture/scooter</li>
            <li>Séance de massage ou d'acupuncture</li>
          </ul>

          <h2 style={{ color: "#8dbad3", fontWeight: "bold" }}>
            Exemple d'horaire quotidien
          </h2>
          <ul>
            <li>7h30 : Tisane</li>
            <li>8h - 9h30 : Matin Cours de Yoga/Méditation</li>
            <li>9h30 Petit-déjeuner</li>
            <li>
              11h00-17h00 Temps libre pour explorer, nager, lire, se faire
              masser
            </li>
            <li>17h30-19h00 Cours de yoga en soirée</li>
            <li>19h30 Dîner</li>
            <li>21h00 Tisane, Temps de partage</li>
          </ul>

          <h2 style={{ color: "#8dbad3", fontWeight: "bold" }}>
            Chambres et tarifs
          </h2>
          <ul>
            <li>Chambre triple partagée : 1300 euros</li>
            <li>Chambre twin partagée : 1400 euros</li>
            <li>Chambre simple : 1750 euros</li>
            Toutes les chambres ont une salle de bain attenante
          </ul>

          <h2 style={{ color: "#8dbad3", fontWeight: "bold" }}>Inscription</h2>
          <p>Veuillez envoyer votre intérêt à cette retraite par e-mail à</p>
          <p>Frédérique : frederique@yogapsy.fr</p>
          <p>Athéna : patmosretreats@gmail.com</p>
          <p>
            Vous recevrez ensuite un formulaire d'inscription à remplir, une
            lettre de bienvenue avec des informations plus détaillées et des
            instructions pour le transfert de paiement
          </p>
          <p>
            Nous avons hâte d'être dans ce lieu sacré avec vous en septembre
            prochain.
          </p>
          <p>Athéna et Frédérique</p>

          {/* <p><a href="https://www.airbnb.fr/rooms/17870638?guests=1&adults=1&s=67&unique_share_id=264363ce-0708-443a-a1a1-2bb0c786ea03" target:"_blank"> Hébergement : au gîte Clément à Pruneyrolles</a></p> */}

          {/* <p>
            <Button
              id="primary-btn"
              variant="primary"
              onClick={handleShowModal}
            >
              Je m'inscris
            </Button>
          </p> */}
        </ArticleContainer>
        <SideBar>
          {" "}
          {/* <Button id="primary-btn" variant="primary" onClick={handleShowModal}>
            Je m'inscris
          </Button> */}
          <Date>
            {" "}
            <AiOutlineCalendar /> 15 - 20 Septembre 2022
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
            <div style={{ textAlign: "left" }}>L'ile de Patmos</div>
          </Date>
          {/* <Date>
            <GoTriangleRight />
            <div style={{ textAlign: "left" }}>
              Accès en train gare "Brioude". Je viendrai vous chercher à la
              gare.
            </div>
          </Date> */}
          {/* <Date>
            <GoHome />
            <div style={{ textAlign: "left" }}>
              
            </div>
          </Date> */}
          <Date>
            <MdEuroSymbol />
            <div>
              <div style={{ textAlign: "left" }}>
                Chambre triple partagée : 1300€/p
              </div>
              <div style={{ textAlign: "left" }}>
                Chambre twin partagée : 1400€/p
              </div>
              <div style={{ textAlign: "left" }}>Chambre simple : 1750€/p</div>
            </div>
          </Date>
          <div style={{ textAlign: "left" }}>
            <p>
              <b>
                Veuillez envoyer votre intérêt à cette retraite par e-mail à
              </b>
            </p>
            <ul>
              <li>Frédérique : frederique@yogapsy.fr</li>
              <li>Athéna : patmosretreats@gmail.com</li>
            </ul>{" "}
          </div>
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
