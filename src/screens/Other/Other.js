import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import imageFond3 from "../../assets/imageFond3.jpeg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

const MainContainer = styled.div`
  padding-top: 100px;
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

  margin: 0 50px;
`;

const Other = (props) => {
  let history = useHistory();
  return (
    <MainContainer>
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
            }}
            variant="top"
            src={imageFond3}
          />
          <Card.Body>
            <Card.Title>Stage de Yoga du 22 Juillet 2022</Card.Title>
            <Card.Text>
              Stage de yoga qui travaille sur blablablablablablablab et blublu
              blibli et voila voili c'est comme ça.
            </Card.Text>
            <Card.Text>Prix: 200€</Card.Text>
            <Button
              id="primary-btn"
              variant="primary"
              onClick={() => history.push("/stage")}
            >
              Plus d'info
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
            }}
            variant="top"
            src={imageFond3}
          />
          <Card.Body>
            <Card.Title>Stage de Yoga du 22 Juillet 2022</Card.Title>
            <Card.Text>
              Stage de yoga qui travaille sur blablablablablablablab et blublu
              blibli et voila voili c'est comme ça.
            </Card.Text>
            <Card.Text>Prix: 200€</Card.Text>
            <Button
              id="primary-btn"
              variant="primary"
              onClick={() => history.push("/stage")}
            >
              Plus d'info
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
            }}
            variant="top"
            src={imageFond3}
          />
          <Card.Body>
            <Card.Title>Stage de Yoga du 22 Juillet 2022</Card.Title>
            <Card.Text>
              Stage de yoga qui travaille sur blablablablablablablab et blublu
              blibli et voila voili c'est comme ça.
            </Card.Text>
            <Card.Text>Prix: 200€</Card.Text>
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
