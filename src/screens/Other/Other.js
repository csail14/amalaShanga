import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import imageFond3 from "../../assets/stageAuvergne1.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import stageGrece from "../../assets/stageGrece.png";
import Fond3 from "../../assets/imageFond3.jpeg";

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
              maxHeight: 250,
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
              Du Jeudi 16 juin soir au Dimanche 19 juin 2022
            </Card.Text>
            <Button
              id="primary-btn"
              variant="primary"
              onClick={() => history.push("/stage1")}
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
              maxHeight: 250,
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
            <Card.Text>Du 15 au 20 septembre 2022</Card.Text>
            <Button
              id="primary-btn"
              variant="primary"
              onClick={() => history.push("/stage2")}
            >
              En savoir plus
            </Button>
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
