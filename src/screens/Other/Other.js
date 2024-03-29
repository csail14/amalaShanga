import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import imageFond3 from "../../assets/stageAuvergne1.jpg";
import StageGretz from "../../assets/stage-gretz.jpg";
import StageRando from "../../assets/stage-yoga-rando.jpg";
import StageGretz2 from "../../assets/stage-gretz2.png";
import StageGretz3 from "../../assets/stageFev24Mini.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import stageGrece from "../../assets/stageGrece.png";
import Fond3 from "../../assets/lotus.jpeg";

const MainContainer = styled.div`
  padding-top: ${(props) => (props.isMobile ? "100px" : "100px")};
  padding-bottom: 40px;
  min-height: 96vh;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 0 50px;
`;

const Other = (props) => {
  let history = useHistory();
  const isMobile = useMediaQuery({ query: "(max-width: 975px)" });

  return (
    <MainContainer
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(${Fond3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      isMobile={isMobile}
    >
      <InfoContainer>
        <Card
          style={{
            width: "20rem",
            boxShadow: " 0px 26px 70px rgba(0, 0, 0, 0.15)",
            borderRadius: "20px",
            margin: "8px",
            cursor: "pointer",
          }}
        >
          <Card.Img
            style={{
              borderRadius: "20px 20px 12px 12px",
              boxShadow: " 0px 26px 70px rgba(0, 0, 0, 0.15)",
              maxHeight: 200,
              objectFit: "cover",
            }}
            variant="top"
            src={StageGretz3}
          />
          <Card.Body>
            <Card.Title>Retraite Yoga : L'ouverture du coeur</Card.Title>
            <Card.Text>
              Je vous propose de nous retrouver au centre védique de Gretz en
              région parisienne. Ce lieu, qui nous accueille maintenant
              régulièrement merci à eux, est un petit bout d’Inde en France !
              J’ai choisi de nous centrer sur le chakra du cœur, ouverture du
              coeur, mais aussi l’estime de soi et la confiance en soi.
            </Card.Text>
            <Card.Text>
              <b>Du 12 au 14 avril 2024</b>
            </Card.Text>
            <Button
              id="primary-btn"
              variant="primary"
              onClick={() => history.push("/stage-gretz-3")}
            >
              En savoir plus
            </Button>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "20rem",
            boxShadow: " 0px 26px 70px rgba(0, 0, 0, 0.15)",
            borderRadius: "20px",
            margin: "8px",
            cursor: "pointer",
          }}
        >
          <Card.Img
            style={{
              borderRadius: "20px 20px 12px 12px",
              boxShadow: " 0px 26px 70px rgba(0, 0, 0, 0.15)",
              maxHeight: 200,
              objectFit: "cover",
            }}
            variant="top"
            src={StageRando}
          />
          <Card.Body>
            <Card.Title>Retraite Yoga et Randonnées</Card.Title>
            <Card.Text>
              Au programme <b>« yoga et randonnées»</b>. Un temps pour se
              synchroniser à la nature, s'émerveiller et se connecter en miroir
              à la merveille de notre nature véritable. <br />
              Yoga dynamique le matin, marche (environ 3h en fonction du groupe)
              et pique nique avec enseignement, marche méditative, méditation,
              contemplation et yoga nidra et méditation en fin de journée.
            </Card.Text>
            <Card.Text>
              <b>1 er et 2 juillet 2023</b>
            </Card.Text>
            <Button
              id="primary-btn"
              variant="primary"
              onClick={() => history.push("/stage-yoga-rando")}
            >
              En savoir plus
            </Button>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "20rem",
            boxShadow: " 0px 26px 70px rgba(0, 0, 0, 0.15)",
            borderRadius: "20px",
            margin: "8px",
            cursor: "pointer",
          }}
        >
          <Card.Img
            style={{
              borderRadius: "20px 20px 12px 12px",
              boxShadow: " 0px 26px 70px rgba(0, 0, 0, 0.15)",
              maxHeight: 200,
              objectFit: "cover",
            }}
            variant="top"
            src={StageGretz2}
          />
          <Card.Body>
            <Card.Title>Retraites de Yogathérapie</Card.Title>
            <Card.Text>
              Le cycle de retraites « Aller à la rencontre du Soi » propose un
              travail en yogathérapie sur 3 sessions en 2023. La philosophie du
              yoga, la pratique du yoga, est un chemin de transformation et est
              en cela thérapeutique.
            </Card.Text>
            <Card.Text>
              <b>7,8,9 et 10 septembre 2023</b>
            </Card.Text>
            <Button
              id="primary-btn"
              variant="primary"
              onClick={() => history.push("/stage-gretz2")}
            >
              En savoir plus
            </Button>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "20rem",
            boxShadow: " 0px 26px 70px rgba(0, 0, 0, 0.15)",
            borderRadius: "20px",
            margin: "8px",
            cursor: "pointer",
          }}
        >
          <Card.Img
            style={{
              borderRadius: "20px 20px 12px 12px",
              boxShadow: " 0px 26px 70px rgba(0, 0, 0, 0.15)",
              maxHeight: 200,
              objectFit: "cover",
            }}
            variant="top"
            src={imageFond3}
          />
          <Card.Body>
            <Card.Title>Retraites de Yogathérapie</Card.Title>
            <Card.Text>
              Le cycle de retraites « Aller à la rencontre du Soi » propose un
              travail en yogathérapie sur 3 sessions en 2023. La philosophie du
              yoga, la pratique du yoga, est un chemin de transformation et est
              en cela thérapeutique.
            </Card.Text>
            <Card.Text>
              <b>28, 29 avril - 1er mai 2023</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "20rem",
            boxShadow: " 0px 26px 70px rgba(0, 0, 0, 0.15)",
            borderRadius: "20px",
            margin: "8px",
            cursor: "pointer",
          }}
        >
          <Card.Img
            style={{
              borderRadius: "20px 20px 12px 12px",
              boxShadow: " 0px 26px 70px rgba(0, 0, 0, 0.15)",
              maxHeight: 200,
              objectFit: "cover",
            }}
            variant="top"
            src={StageGretz}
          />
          <Card.Body>
            <Card.Title>Retraites de Yogathérapie</Card.Title>
            <Card.Text>
              Le cycle de retraites « Aller à la rencontre du Soi » propose un
              travail en yogathérapie sur 3 sessions en 2023. La philosophie du
              yoga, la pratique du yoga, est un chemin de transformation et est
              en cela thérapeutique.
            </Card.Text>
            <Card.Text>
              <b>26 - 29 janvier 2023</b>
            </Card.Text>
          </Card.Body>
        </Card>
        {/* <Card
          style={{
            width: "20rem",
            boxShadow: " 0px 26px 70px rgba(0, 0, 0, 0.15)",
            borderRadius: "20px",
            margin: "8px",
            cursor: "pointer",
          }}
        >
          <Card.Img
            onClick={() => history.push("/stage1")}
            style={{
              borderRadius: "20px 20px 12px 12px",
              boxShadow: " 0px 26px 70px rgba(0, 0, 0, 0.15)",
              maxHeight: 200,
              objectFit: "cover",
            }}
            variant="top"
            src={imageFond3}
          />
          <Card.Body>
            <Card.Title>Stage de Yoga en Auvergne</Card.Title>
            <Card.Text>
              Initiation à une autre philosophie de vie: « La Philosophie du
              Yoga ou l’art de la transformation du moi vers l’émergence du SOI
              »
            </Card.Text>
            <Card.Text>
              <b>Printemps / Eté 2023</b>
            </Card.Text>
            {/* <Button
              id="primary-btn"
              variant="primary"
              onClick={() => history.push("/stage1")}
            >
              En savoir plus
            </Button> */}
        {/* </Card.Body>
        </Card> */}
        <Card
          style={{
            width: "20rem",
            boxShadow: " 0px 26px 70px rgba(0, 0, 0, 0.15)",
            borderRadius: "20px",
            margin: "8px",
            cursor: "pointer",
          }}
        >
          <Card.Img
            style={{
              borderRadius: "20px 20px 12px 12px",
              boxShadow: " 0px 26px 70px rgba(0, 0, 0, 0.15)",
              maxHeight: 200,
              objectFit: "cover",
            }}
            variant="top"
            src={stageGrece}
          />
          <Card.Body>
            <Card.Title>Stage de Yoga en Grèce</Card.Title>
            <Card.Text>
              Retirez-vous loin du monde agité et venez pratiquer le yoga dans
              une île paradisiaque. Un temps pour se ressourcer dans la nature,
              nager dans la mer Egée, contempler la beauté des paysages,
              respirez la pureté de l’air, ressentir l’énergie tellurique et
              spirituelle de cette île, savourer une cuisine saine et
              délicieuse, tout en pratiquant le yoga et la méditation,
              accompagnée par mon amie Athéna , professeur de yoga à Patmos et
              moi-même.
            </Card.Text>
            <Card.Text>
              <b>Du 15 au 20 septembre 2022</b>
            </Card.Text>
            {/* <Button
              id="primary-btn"
              variant="primary"
              onClick={() => history.push("/stage2")}
            >
              En savoir plus
            </Button> */}
          </Card.Body>
        </Card>
      </InfoContainer>
    </MainContainer>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Other);
