import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import stageAuvergne2 from "../../assets/stage-gretz2.png";
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
              flexDirection: "column",
              marginTop: 90,
            }}
          >
            <img src={stageAuvergne2} alt="Stage Gretz" />
          </div>
        </div>
      </Fade>

      <Content isMobile={isMobile}>
        <ArticleContainer isMobile={isMobile}>
          <TitleContainer>
            Rencontre 2 : « Le yoga, un chemin de stabilité dans un monde agité
            »
          </TitleContainer>
          <SubTitleContainer>Au Centre Védique de Gretz</SubTitleContainer>
          <SubTitleContainer>Du 28 avril au 1er mai 2023</SubTitleContainer>
          <SubTitleContainer>
            Animée par <b>Frédérique Saillard</b>
          </SubTitleContainer>
          <p></p>
          <p>
            Le cycle de retraites <b>« Aller à la rencontre du Soi »</b> propose
            un travail en propose un travail en yoga et thérapie. La philosophie
            du yoga, la pratique du yoga, est un chemin de transformation et est
            en cela thérapeutique. <br />
            La première retraite s’est tenue fin janvier, et était centrée sur
            la découverte du Soi : qui est le SOI et comment me relier à mon
            SOI. <br />
            Cette deuxième retraite à l’ashram de Gretz a pour thématique :{" "}
            <b>« Le yoga, un chemin de stabilité dans un monde agité »</b>
            <br />
          </p>
          <p>
            Trouver la Paix intérieure en retraite de yoga c’est bien, mais
            savoir garder cette paix intérieure dans nos activités quotidiennes,
            là où la vie nous a posé, c’est un vrai challenge qui transforme
            notre rapport à soi, aux autres, au monde.
          </p>
          <p>
            J’anime depuis plusieurs années des groupes de thérapie et par
            ailleurs j’anime des retraites de yoga. Dans ce cycle, je propose
            d’allier les deux. Mon expérience m’amène aujourd’hui à proposer ce
            travail qui allie le corps, l’âme et l’esprit, les trois dimensions
            de l’être. C’est l’approche de la yoga thérapie qui s’inscrit dans
            une démarche de développement personnel.
          </p>
          <p>
            Ce cycle se tiendra au Centre Védique de Gretz (64 boulevard Victor
            Hugo, 77220 Gretz, France). Ce lieu est un ashram, ou monastère
            hindou, ouvert sur tout chemin d’intériorité. Les différentes
            rivières qui nous unies dans l’océan.
          </p>
          <p>
            <b>« Aller à la rencontre du Soi »</b> est un chemin de
            transformation qui va vous aider à mieux vous connaitre, mieux vous
            écouter, mieux vous respecter et ainsi trouver votre place dans un
            épanouissement de l’être et dans votre relation ajustée aux autres,
            au monde. <br />
            Cette plénitude de l’être sera accompagnée individuellement et en
            groupe.
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
            <b>Programme de la retraite :</b>
          </p>
          <ul>
            <li>
              <b>Vendredi 28 avril :</b>
              <ul>
                <li>A partir de 17h : Accueil</li>
                <li>19h : Diner et karma yoga</li>
                <li>
                  20h30 : Présentation de la retraite – Petite pratique de yoga
                  du soir.
                </li>
              </ul>
            </li>
            <p></p>
            <li>
              <b>Samedi 29 avril :</b>
              <ul>
                <li>7h : Pratique du yoga</li>
                <li>8h : Petit déjeuner et karma Yoga</li>
                <li>
                  9h30 : Présentation et définition des objectifs de chacun
                </li>
                <li>10h45 : Pratique de Pranayama et Méditation</li>
                <li>12h : Déjeuner et karma yoga</li>
                <li>
                  14h : Enseignement « Le yoga, un chemin de stabilité dans un
                  monde agité » - Partage
                </li>
                <li>15h30 : Pratique de Yoga</li>
                <li>16h30 : Pause Goûter</li>
                <li>
                  17h à 18h : Temps de libre / silence ou conférence de l’ashram
                </li>
                <li>18H à 19h : Pratique yoga nidra</li>
                <li>19h : Diner et karma yoga</li>
                <li>
                  20h à 21h30 : Satsang - Bilan de la journée - Méditation
                </li>
              </ul>
            </li>
            <p></p>
            <li>
              <b>Dimanche 30 avril :</b>
              <ul>
                <li>7h : Pratique du yoga</li>
                <li>8h : Petit déjeuner et karma Yoga</li>
                <li>
                  9h30 : Enseignement pour le 2ème weekend « Le yoga, un chemin
                  de stabilité dans un monde agité » Partage
                </li>
                <li>10h45 : Pratique de Pranayama et Méditation</li>
                <li>12h : Déjeuner et karma yoga</li>
                <li>14h : Temps libre </li>
                <li>
                  15h : Conférence sur le Soi avec Swami Atmarupananda,
                  directeur spirituel de l’ashram.
                </li>
                <li>16h30 à 17h : Pause Goûter</li>
                <li>17h à 18h30 : Enseignement et pratique yoga nidra</li>
                <li>19h : Diner et karma yoga</li>
                <li>
                  20h à 21h30 : Satsang – Bilan de la journée - Méditation
                </li>
              </ul>
            </li>
            <p></p>
            <li>
              <b> Lundi 1er mai :</b>
              <ul>
                <li>7h à 8h : Pratique du yoga</li>
                <li>8h : Petit déjeuner et karma yoga</li>
                <li>9h30 : Bilan des enseignements du week-end</li>
                <li>12h : Déjeuner</li>
                <li>14h à 15h : Clôture du weekend : avec quoi je repars ?</li>
              </ul>
            </li>
          </ul>
          <p>
            Possibilité de suivre les activités proposées par l’ashram tous les
            jours :
            <ul>
              <li>La méditation à 6h le matin</li>
              <li>L’arati à 18h30</li>
            </ul>
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
            <AiOutlineCalendar style={{ width: "20px", height: "20px" }} />{" "}
            29,30 Avril - 1er Mai 2023
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
