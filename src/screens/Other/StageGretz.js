import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import stageAuvergne1 from "../../assets/stage-gretz.jpg";
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
              flexDirection: "column",
              justifyContent: "center",
              maxHeight: "50%",
              backgroundImage: ` url(${stageAuvergne1})`,
              backgroundSize: "cover",
              backgroundPosition: isMobile ? "center" : "center -470px",
              marginTop: 90,
            }}
          >
            <MainContainer isMobile={isMobile}>
              <TitleContainer>
                <SubTitleContainer>
                  Retraites de Yogathérapie{" "}
                </SubTitleContainer>
                « Aller à la rencontre du Soi »
              </TitleContainer>

              <DetailsContainer style={{ marginBottom: 0 }}>
                Du 26 au 29 janvier 2023
              </DetailsContainer>
              <DetailsContainer> Au centre Védique de Gretz</DetailsContainer>
              <TextContainer>
                Animée par Frédérique Saillard, praticienne en psychothérapie et
                yogathérapie, assistée de Joelle salou, coach et yoga thérapeute
              </TextContainer>
            </MainContainer>
          </div>
        </div>
      </Fade>

      <Content isMobile={isMobile}>
        <ArticleContainer isMobile={isMobile}>
          <p>
            Le cycle de retraites <b>« Aller à la rencontre du Soi »</b> propose
            un travail en yogathérapie sur 4 sessions en 2023, la première
            session aura lieu du 26 au 29 janvier 2023. La philosophie du yoga,
            la pratique du yoga, est un chemin de transformation et est en cela
            thérapeutique.
            <br />
            J’anime depuis plusieurs années des groupes de thérapie et par
            ailleurs j’anime des retraites de yoga. Dans ce cycle je propose
            d’allier les deux. Mon expérience m’amène aujourd’hui à proposer ce
            travail qui allie le corps, l’âme et l’esprit, les trois dimensions
            de l’être. C’est l’approche de la yogathérapie qui s’inscrit dans
            une démarche de développement personnel.
          </p>
          <p>
            Ce cycle se tiendra au Centre Védique de Gretz (64 boulevard Victor
            Hugo, 77220 Gretz, France). Ce lieu est un ashram, ou monastère
            hindou, ouvert sur tout chemin d’intériorité. J’animerai ce cycle
            avec l’aide de Joelle Salou, yogathérapeute, coach et grande
            habituée du site.
          </p>
          <p>
            <b>« Aller à la rencontre du Soi »</b> est un chemin de
            transformation qui va vous aider à mieux vous connaitre, mieux vous
            écouter, mieux vous respecter et ainsi trouver votre place dans un
            épanouissement de l’être et dans votre relation ajustée aux autres,
            au monde. Cette plénitude de l’être sera accompagnée
            individuellement et en groupe.
          </p>
          <p>
            Nous pratiquerons des postures simples de Hatha Yoga (yoga
            traditionnel), des exercices de respirations ou pranayamas, des
            méditations. Nous pourrons méditer dans la salle de méditation de
            l’ashram. Nous aurons des temps de partage, d’enseignement et de
            travail individuel en développement personnel ainsi que des temps en
            silence dans le parc de l’ashram.
            <br />
            Nous prendrons nos repas (végétariens) avec la communauté locale et
            participerons pour ceux qui le souhaitent aux services des repas.
            Nous serons hébergés dans des chambres doubles à l’ashram.
          </p>
          <p>
            Ce cycle est ouvert à mes élèves de yoga, à mes patients et à toutes
            autres personnes après un entretien préalable ensemble d’une heure.
          </p>
          <p>
            <b>Au programme de chaque retraite :</b>
          </p>
          <ul>
            <li>
              Jeudi :
              <ul>
                <li>A partir de 17h : Accueil</li>
                <li>19h : Diner</li>
                <li>20h30 : Présentation de la retraite</li>
              </ul>
            </li>
            <li>
              Vendredi :
              <ul>
                <li>
                  6h : Chant et Méditation dans l'ashram - <b>Falcultatif</b>
                </li>
                <li>7h : Pratique du yoga</li>
                <li>8h : Petit déjeuner et karma Yoga</li>
                <li>
                  9h30 : Définition des objectifs de chacun et enseignement
                </li>

                <li>12h : Déjeuner</li>
                <li>14h : Enseignement et thérapie de groupe - Partage</li>
                <li>16h30 : Pause thé avec l'ashram</li>
                <li>
                  17h à 18h30 : Travail personnel en silence ou pratique du yoga
                </li>
                <li>
                  18H30 : Larati Chant avec la communauté de l'ashram -{" "}
                  <b>Falcultatif</b>.
                </li>
                <li>19h : Diner</li>
                <li>
                  20h à 21h30 : Satsang - Bilan de la journée - Méditation
                </li>
              </ul>
            </li>
            <li>
              Samedi :
              <ul>
                <li>
                  6h : Chant et Méditation dans l'ashram - <b>Falcultatif</b>
                </li>
                <li>7h : Pratique du yoga</li>
                <li>8h : Petit déjeuner et karma Yoga</li>
                <li>9h30 : Enseignement et Partage</li>
                <li>12h : Déjeuner</li>
                <li>14h : Enseignement et thérapie de groupe - Partage</li>
                <li>16h30 : Pause thé avec l'ashram</li>
                <li>
                  17h à 18h30 : Travail personnel en silence ou pratique du yoga
                </li>
                <li>
                  18H30 : Larati Chant avec la communauté de l'ashram -{" "}
                  <b>Falcultatif</b>.
                </li>
                <li>19h : Diner</li>
                <li>
                  20h à 21h30 : Satsang - Bilan de la journée - Méditation
                </li>
              </ul>
            </li>
            <li>
              Dimanche :
              <ul>
                <li>
                  6h : Chant et Méditation dans l'ashram - <b>Falcultatif</b>
                </li>
                <li>7h : Pratique du yoga</li>
                <li>8h : Petit déjeuner et karma Yoga</li>
                <li>9h30 : Enseignement et Partage</li>
                <li>12h : Déjeuner</li>
                <li>14h : Cloture du week end</li>
                <li>
                  15h : Possibilité de suivre l'enseignement du Swami de
                  l'ashram
                </li>
              </ul>
            </li>
          </ul>
          <p>
            <b>Mes engagements :</b>
          </p>
          <p>
            Je vous accompagne dans ce chemin sur ces trois weekends du jeudi
            soir (accueil à partir de 17h) au dimanche à 15h. Programme du
            week-end ci-dessous.
            <br />
            Je définirai avec chacun d’entre vous un objectif clair de travail
            thérapeutique qui sera le fil rouge de ses trois weekends.
            <br />
            Je vous proposerai une pratique quotidienne à mettre en place entre
            chaque session. Je serai disponible pour un point mensuel (non
            compris dans le prix du cycle). J’aurai avec chacun participant une
            relation essentiellement thérapeutique. Je respecterai mon cadre de
            déontologique qui est celui de la FF2P (Fédération Française de
            Psychothérapeute).
          </p>
          <p>
            <b>Vos engagements :</b>
          </p>
          <p>
            Vous serez présents du jeudi soir au dimanche 16h. <br />
            Vous vous engagez à être présents par retour du bulletin
            d’inscription. Pas de remboursement prévu dans les 15 jours qui
            précédent la retraite. <br />
            Vous avez avec les animateurs, Joelle et moi-même, une relation
            thérapeutique. Vous êtes dans l’écoute, le respect et la
            bienveillance pour chaque membre du groupe et les personnes de
            l’ashram.
            <br />
            Chaque personne doit se sentir libre de parler en toute
            confidentialité et il ne sera pas répété ce qui a été partagé de
            personnel et d’intime dans le groupe.
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
              <b>Forfaits pour cette retraite de 3 jours</b> : 300 € pour les
              membres de l'associtaion Amala Sangha à jour de leur cotisation
              2023 (20€).
            </p>
            <p>
              <b>Forfaits hébergement </b> par personne en pension complète avec
              draps et serviette fournis : 60€ par jour et par personne soit 180
              € les trois jour, à régler en chèque le jour de la retraite.
              Chambre à 2 ou 3 Personnes. Cuisine Végétarienne.
            </p>

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
            <AiOutlineCalendar style={{ width: "20px", height: "20px" }} /> 26 -
            29 janvier 2023
          </Date>
          {/* <Date>
            {" "}
            <MdEuroSymbol /> 200 €
          </Date> */}
          {/* <Date>
            {" "}
            <MdEuroSymbol />{" "} */}
          <Date>
            <GoLocation style={{ width: "20px", height: "20px" }} />{" "}
            <div style={{ textAlign: "left" }}>
              Centre Védique de Gretz <br /> 77220 Gretz
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
                Forfait Retraite : 300€ à régler à l'inscription.
              </div>
            </div>
          </Date>
          <Date>
            <MdEuroSymbol style={{ width: "3rem", height: "3rem" }} />
            <div style={{ textAlign: "left" }}>
              Forfait hébergement en pension complète : 180€ en chambre 2/3
              personnes à régler sur place.
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
