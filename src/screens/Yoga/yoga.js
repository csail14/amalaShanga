import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Fond3 from "../../assets/imageFond3.jpeg";
import yoga_default_image from "../../assets/yoga_default_image.jpeg";
import Minutes from "../../assets/30minutes.png";
import Debutant from "../../assets/debutant.jpeg";
import Salutation from "../../assets/salutation.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ModalAddToBasket from "./addBasketModal";
import { addInBasket } from "../../actions/basket/basketActions";
import { getOrderByClientByProduct } from "../../utils/API/orderApi";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

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
  align-items: top;
  margin: 0 50px;
`;

const Yoga = (props) => {
  const [showAddToBasketModal, setShowAddToBasketModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleShowModal = () => setShowAddToBasketModal(true);
  const handleCloseModal = () => setShowAddToBasketModal(false);
  const isMobile = useMediaQuery({ query: "(max-width: 975px)" });
  const buyClasses = (item) => {
    if (props.user && props.user.infos) {
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
            "Vous avez déjà acheté ce cours.  Rendez vous dans la rubrique 'Mon compte' pour le consulter."
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
    } else {
      setModalMessage("Vous devez vous connecter pour acheter un cours.");
      handleShowModal();
    }
  };

  const classes =
    props.yogaClasses &&
    props.yogaClasses.array &&
    props.yogaClasses.array.sort(function (a, b) {
      console.log();
      return new Date(b.creation_date) - new Date(a.creation_date);
    });

  return (
    <MainContainer
      isMobile={isMobile}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(${Fond3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <TitleContainer>
        Voici la liste des cours de yoga mis à disposition
      </TitleContainer>
      <InfoContainer>
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
              maxHeight: "160px",
              objectFit: "contain",
            }}
            variant="top"
            src={Salutation}
          />
          <Card.Body
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Card.Title>Salutation au soleil</Card.Title>
            <Card.Text>
              Une pratique quotidienne. Faire cinq salutations au soleil tous
              les matins en étant relié à notre soleil intérieur, énergie de Vie
              Amour !
            </Card.Text>
            <Card.Text>
              Prix: <b>Gratuit</b>
            </Card.Text>
            <Button id="primary-btn" variant="primary">
              <Link
                to={{
                  pathname: "studio",
                  state: { url: "https://www.youtube.com/embed/Ev_yr1lPWJI" },
                }}
              >
                Essayer ce cours gratuit
              </Link>
            </Button>
          </Card.Body>
        </Card>
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
            src={Minutes}
          />
          <Card.Body
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Card.Title>Ma séance de 30 min</Card.Title>
            <Card.Text>
              Vous n'avez qu'une demi-heure par jour pour pratiquer votre
              yoga...Voilà une séance complète ! Bonne pratique
            </Card.Text>
            <Card.Text>
              Prix: <b>Gratuit</b>
            </Card.Text>
            <Button id="primary-btn" variant="primary">
              <Link
                to={{
                  pathname: "studio",
                  state: { url: "https://www.youtube.com/embed/gHKy6LhXLs4" },
                }}
              >
                Essayer ce cours gratuit
              </Link>
            </Button>
          </Card.Body>
        </Card>
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
            src={Debutant}
          />
          <Card.Body
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Card.Title>Séance de yoga débutant</Card.Title>
            <Card.Text>
              Une séance de 30 minutes avec toutes les explications pour bien
              débuter le yoga en toute sécurité !
            </Card.Text>
            <Card.Text>
              Prix: <b>Gratuit</b>
            </Card.Text>
            <Button id="primary-btn" variant="primary">
              <Link
                to={{
                  pathname: "studio",
                  state: { url: "https://www.youtube.com/embed/gHKy6LhXLs4" },
                }}
              >
                Essayer ce cours gratuit
              </Link>
            </Button>
          </Card.Body>
        </Card>

        {classes.map((item, index) => {
          if (item.isAvailable === 0) {
            return null;
          }
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
                onClick={() => buyClasses(item)}
                style={{
                  borderRadius: "20px 20px 12px 12px",
                  boxShadow: " 0px 26px 70px rgba(0, 0, 0, 0.15)",
                  maxHeight: "160px",
                  objectFit: "contain",
                }}
                variant="top"
                src={item.image ? item.image : yoga_default_image}
              />
              <Card.Body
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
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
