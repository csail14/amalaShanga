import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import yoga_default_image from "../../assets/yoga_default_image.jpeg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ModalAddToBasket from "./addBasketModal";
import { addInBasket } from "../../actions/basket/basketActions";
import { getOrderByClientByProduct } from "../../utils/API/orderApi";
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
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 50px;
`;

const Yoga = (props) => {
  const [showAddToBasketModal, setShowAddToBasketModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleShowModal = () => setShowAddToBasketModal(true);
  const handleCloseModal = () => setShowAddToBasketModal(false);
  const isMobile = useMediaQuery({ query: "(max-width: 975px)" });
  const buyClasses = (item) => {
    getOrderByClientByProduct(props.user.infos.id, item.id).then((res) => {
      const isAlreadyBuy =
        res && res.data && res.data.result && res.data.result.length > 0;
      const isLogged = props.user && props.user.isLogged;
      const isMember =
        isLogged && props.user.infos && props.user.infos.isMember;
      const isAlreadyInBasket =
        props.basket &&
        props.basket.products &&
        props.basket.products.includes(item);
      if (!isLogged) {
        setModalMessage("Vous devez vous connecter pour acheter un cours.");
      } else if (!isMember) {
        setModalMessage("Vous devez etre membre pour acheter un cours.");
      } else if (isAlreadyInBasket) {
        setModalMessage("Ce cours est déjà dans votre panier.");
      } else if (isAlreadyBuy) {
        setModalMessage(
          "Vous avez déjà acheté ce cours. Rendez vous dans la rubrique 'Mon compte' pour le consulter."
        );
      } else {
        setModalMessage("Votre cours a bien été ajouté au panier.");
      }
      if (isLogged && isMember && !isAlreadyBuy & !isAlreadyInBasket) {
        props.addInBasket(item);
        handleShowModal();
      } else {
        handleShowModal();
      }
    });
  };

  return (
    <MainContainer isMobile={isMobile}>
      <TitleContainer>
        Voici la liste des cours de yoga mis à disposition
      </TitleContainer>
      <InfoContainer>
        {props.yogaClasses &&
          props.yogaClasses.array &&
          props.yogaClasses.array.map((item, index) => {
            return (
              <Card
                style={{
                  width: "18rem",
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
                  }}
                  variant="top"
                  src={yoga_default_image}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text>Prix: {item.price} €</Card.Text>
                  <Button
                    id="primary-btn"
                    variant="primary"
                    onClick={() => buyClasses(item)}
                  >
                    Acheter ce cours
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
      </InfoContainer>
      <ModalAddToBasket
        show={showAddToBasketModal}
        handleClose={handleCloseModal}
        handleShow={handleShowModal}
        modalMessage={modalMessage}
      />
    </MainContainer>
  );
};

const mapDispatchToProps = { addInBasket };

const mapStateToProps = (store) => {
  return {
    yogaClasses: store.yogaClasses,
    user: store.user,
    basket: store.basket,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Yoga);
