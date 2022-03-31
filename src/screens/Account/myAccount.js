import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { getOrderByClient } from "../../utils/API/orderApi";
import moment from "moment";
import ModifyPersonalInfoModal from "./modifyPersonalInfoModal";
import CotisationoModal from "./cotisationModal";
import { isMemberCheck } from "../../service/userService";
require("moment/locale/fr.js");

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

const SubTitleContainer = styled.p`
  color: black;

  font-size: 20px;
  text-align: left;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background: #f8f9fa;
  margin: ${(props) => (props.isMobile ? "20px" : "10px 50px")};
  color: white;
  border: 0.5px solid white;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
`;

const InfoDetailsContainer = styled.div`
  margin: 8px;
  padding: 10px;
`;
const AllInfoDetailsContainer = styled.div`
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  border-radius: 12px;
  background-color: white;
  margin: 5px 0;
  color: grey;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
`;
const MyAccount = (props) => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [showModifyInfoModal, setShowModifyInfoModal] = useState(null);
  const [showCotisationModal, setShowCotisationModal] = useState(null);
  const userDetails = props.user && props.user.infos;
  const isMobile = useMediaQuery({ query: "(max-width: 975px)" });

  const handleShowInfoModal = () => setShowModifyInfoModal(true);
  const handleCloseInfoModal = () => setShowModifyInfoModal(false);
  const handleShowCotisationModal = () => setShowCotisationModal(true);
  const handleCloseCotisationModal = () => setShowCotisationModal(false);

  const isMember = isMemberCheck(props.user);

  useEffect(() => {
    getOrderByClient(userDetails && userDetails.id)
      .then((res) => {
        setOrderDetails(res.data.results);
      })
      .catch((error) => console.log(error));
  }, [userDetails]);
  return (
    <MainContainer>
      <TitleContainer>
        Bienvenue {userDetails && userDetails.firstName}{" "}
      </TitleContainer>
      <InfoContainer isMobile={isMobile}>
        <SubTitleContainer>Mes informations </SubTitleContainer>
        <AllInfoDetailsContainer style={{ justifyContent: "center" }}>
          {/* <img
            style={{
              borderRadius: "50%",
              maxHeight: "200px",
              margin: "40px",
            }}
            src={fred}
            alt="home_illu"
          /> */}
          <div>
            <InfoDetailsContainer>
              <b>Nom :</b> {userDetails && userDetails.lastName}
            </InfoDetailsContainer>
            <InfoDetailsContainer>
              <b>Prénom :</b> {userDetails && userDetails.firstName}
            </InfoDetailsContainer>
            <InfoDetailsContainer>
              <b>Email :</b> {userDetails && userDetails.email}
            </InfoDetailsContainer>
            <InfoDetailsContainer>
              <b>Cotisation à jour :</b>{" "}
              {userDetails && userDetails.isMember ? "Oui" : "Non"}
            </InfoDetailsContainer>
            <InfoDetailsContainer>
              <b>Date de naissance :</b>{" "}
              {userDetails && userDetails.birthdate
                ? moment(userDetails.birthdate).format("LL")
                : "Non renseignée"}
            </InfoDetailsContainer>
          </div>
        </AllInfoDetailsContainer>
        <div
          style={{
            display: "flex",
            margin: isMobile ? "auto" : "20px auto 10px auto",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Button
            variant="primary"
            type="submit"
            id="primary-btn"
            style={{ width: "fit-content", margin: "5px" }}
            onClick={handleShowInfoModal}
          >
            Modifier mes informations
          </Button>
          {!isMember && (
            <Button
              variant="primary"
              type="submit"
              id="primary-btn"
              style={{
                width: "fit-content",
                margin: "5px",
                backgroundColor: "#a4d5ff6b",
                border: "0",
              }}
              onClick={handleShowCotisationModal}
            >
              Devenir membre
            </Button>
          )}
        </div>
      </InfoContainer>
      <InfoContainer isMobile={isMobile}>
        <SubTitleContainer>Mes cours ou activités </SubTitleContainer>
        {orderDetails &&
          orderDetails.map((order) => {
            return (
              <Link
                to={{
                  pathname: "studio",
                  state: { url: order && order.details && order.details.url },
                }}
              >
                <AllInfoDetailsContainer className="onHoverIsGrey">
                  <InfoDetailsContainer>
                    <b>Nom :</b> {order && order.details && order.details.name}
                  </InfoDetailsContainer>
                  <InfoDetailsContainer>
                    <b>Date d'achat :</b>{" "}
                    {moment(order && order.creation_date).format("LL")}
                  </InfoDetailsContainer>
                  <InfoDetailsContainer>
                    <b>Valide jusqu'au :</b> date
                  </InfoDetailsContainer>
                </AllInfoDetailsContainer>
              </Link>
            );
          })}
      </InfoContainer>
      <ModifyPersonalInfoModal
        show={showModifyInfoModal}
        handleClose={handleCloseInfoModal}
        handleShow={handleShowInfoModal}
      />
      <CotisationoModal
        show={showCotisationModal}
        handleClose={handleShowCotisationModal}
        handleShow={handleCloseCotisationModal}
      />
    </MainContainer>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return { user: store.user };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);
