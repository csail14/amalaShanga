import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import {
  getActivitiesById,
  editActivities,
} from "../../../utils/API/activitiesApi";

const SubTitleContainer = styled.p`
  color: grey;
  font-weight: 700;
  font-size: 20px;
  text-align: left;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background: #f8f9fa;
  margin: ${(props) => (props.isMobile ? "" : "10px 50px")};
  color: white;
  border: 0.5px solid white;
  border-radius: 12px;
  padding: 12px;
  min-height: 96vh;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
`;

const InfoDetailsContainer = styled.div`
  margin: 8px;
  padding: 10px;
`;
const AllInfoDetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 12px;
  background-color: white;
  margin: 5px 0;
  color: grey;
  border: 0.5px solid grey;
`;

const Activities = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 975px)" });
  const [meditationUrl, setMeditationUrl] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    getActivitiesById(1).then((res) => {
      setMeditationUrl(res?.result?.url);
    });
  }, []);

  const submit = () => {
    const body = {
      name: "meditation",
      url: meditationUrl,
    };
    editActivities(body, 1).then((res) => {
      if (res.status === 200) {
        setSuccess(true);
      }
    });
  };
  return (
    <InfoContainer isMobile={isMobile}>
      <SubTitleContainer>Les activités </SubTitleContainer>
      <AllInfoDetailsContainer className="onHoverIsBorderGrey">
        <InfoDetailsContainer>
          Lien méditation
          <div style={{ display: "flex" }}>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={meditationUrl}
              onChange={(e) => {
                setMeditationUrl(e.target.value);
              }}
              style={{ width: "80vw" }}
            />
            {success && (
              <Form.Text className="text-muted">Lien modifié</Form.Text>
            )}
            <Button id="primary-btn" variant="primary" onClick={submit}>
              Modifier le lien
            </Button>
          </div>
          {/* <b>Image:</b>{" "} */}
          {/* <img
              style={{
                borderRadius: "50%",
                maxHeight: "200px",
                margin: "20px",
              }}
              src={fred}
              alt="home_illu"
            /> */}
        </InfoDetailsContainer>

        {/* <InfoDetailsContainer>
          <b>Nom:</b> Cours du 21 octobre
        </InfoDetailsContainer>
        <InfoDetailsContainer>
          <b>Description:</b> Cours de yoga qui travaille sur
          blablablablablablablab et blublu blibli et voila voili c'est comme ça.
        </InfoDetailsContainer>
        <InfoDetailsContainer>
          <b>Lien:</b>{" "}
          https://www.youtube.com/watch?v=Ev_yr1lPWJI&ab_channel=yogapsy
        </InfoDetailsContainer>
        <InfoDetailsContainer>
          <b>Etat:</b> En ligne
        </InfoDetailsContainer>
        <InfoDetailsContainer>
          <b>Type:</b> En Présentiel
        </InfoDetailsContainer>
        <InfoDetailsContainer>
          <b>Prix:</b> 9€
        </InfoDetailsContainer>
        <InfoDetailsContainer>
          <FaTrash />
          <FaPen />
        </InfoDetailsContainer> */}
      </AllInfoDetailsContainer>
      {/* <AllInfoDetailsContainer className="onHoverIsBorderGrey">
        <InfoDetailsContainer>
          <b>Nom :</b> Cours du 21 octobre
        </InfoDetailsContainer>
        <InfoDetailsContainer>
          <b>Date d'achat :</b> 30 Octobre 2021
        </InfoDetailsContainer>
        <InfoDetailsContainer>
          <b>Lien :</b> http://monlien.fr
        </InfoDetailsContainer>
        <InfoDetailsContainer>
          <b>Valide jusqu'au :</b> date
        </InfoDetailsContainer>
      </AllInfoDetailsContainer> */}
      {/* <AllInfoDetailsContainer className="onHoverIsBorderGrey">
        <InfoDetailsContainer>
          <b>Nom :</b> Cours du 21 octobre
        </InfoDetailsContainer>
        <InfoDetailsContainer>
          <b>Date d'achat :</b> 30 Octobre 2021
        </InfoDetailsContainer>
        <InfoDetailsContainer>
          <b>Lien :</b> http://monlien.fr
        </InfoDetailsContainer>
        <InfoDetailsContainer>
          <b>Valide jusqu'au :</b> date
        </InfoDetailsContainer>
      </AllInfoDetailsContainer> */}
      {/* <AllInfoDetailsContainer className="onHoverIsBorderGrey">
        <InfoDetailsContainer>
          <b>Nom :</b> Cours du 21 octobre
        </InfoDetailsContainer>
        <InfoDetailsContainer>
          <b>Date d'achat :</b> 30 Octobre 2021
        </InfoDetailsContainer>
        <InfoDetailsContainer>
          <b>Lien :</b> http://monlien.fr
        </InfoDetailsContainer>
        <InfoDetailsContainer>
          <b>Valide jusqu'au :</b> date
        </InfoDetailsContainer>
      </AllInfoDetailsContainer> */}
    </InfoContainer>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Activities);
