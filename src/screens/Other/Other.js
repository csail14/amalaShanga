import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import imageFond3 from "../../assets/stageAuvergne1.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const MainContainer = styled.div`
  padding-top: ${(props) => (props.isMobile ? "" : "100px")};
  padding-bottom: 40px;
  min-height: 96vh;
`;

const TitleContainer = styled.p`
  color: white;
  font-weight: 700;
  font-size: 32px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 50px;
`;

const Other = (props) => {
  let history = useHistory();
  const isMobile = useMediaQuery({ query: "(max-width: 975px)" });

  return (
    <MainContainer isMobile={isMobile}>
      <TitleContainer>
        Voici la liste des cours de yoga mis à disposition
      </TitleContainer>
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
            <Card.Title>Stage de Yoga du 22 Juillet 2022</Card.Title>
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
              onClick={() => history.push("/stage")}
            >
              Plus d'info
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
