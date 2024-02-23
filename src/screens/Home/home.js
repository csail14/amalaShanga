import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import { getStart } from "../../utils/API/API";
import { Fade } from "react-slideshow-image";
import imageFond1 from "../../assets/lotus.jpeg";
import imageFond2 from "../../assets/shiva.jpg";
import Button from "react-bootstrap/Button";
import { useMediaQuery } from "react-responsive";
import { getActivitiesById } from "../../utils/API/activitiesApi";
import { getOrderByClientByProduct } from "../../utils/API/orderApi";
import RegisterDirectClassModal from "./RegisterDirectClassModal";
import { addInBasket } from "../../actions/basket/basketActions";

const MainContainer = styled.div`
  width: ${(props) => (props.isMobile ? "" : "50%")};
  margin-top: "50px";
`;

const TitleContainer = styled.p`
  color: white;
  font-weight: 700;
  font-size: 32px;
  padding: 30px;
  padding-bottom: 0px;
  text-align: left;
`;

const SubTitleContainer = styled.p`
  color: white;
  font-weight: 700;
  font-size: 25px;
  padding: 0px 30px;
  text-align: left;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? "column" : "rox")};
  gap: 1;
  align-items: left;
  padding: 0 30px;
`;
const TextContainer = styled.div`
  padding: 30px;
  color: white;
  text-align: left;
  font-size: 20px;
`;

const Home = (props) => {
  useEffect(() => {
    getStart();
  }, []);

  const [directClassInfo, setDirectClassInfo] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    getActivitiesById(5).then((res) => {
      setDirectClassInfo(res?.result);
    });
  }, []);

  const directClass =
    props.yogaClasses &&
    directClassInfo &&
    props.yogaClasses.array &&
    props.yogaClasses.array.filter(
      (item) => item.id === directClassInfo.class_id
    )[0];

  const isMobile = useMediaQuery({ query: "(max-width: 975px)" });

  const slideImages = [imageFond1, imageFond2];
  let history = useHistory();

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
          setModalMessage(
            "Vous devez vous connecter pour vous inscrire au cours."
          );
        } else if (!isMember) {
          setModalMessage(
            "Vous devez etre membre pour vous inscrire au cours."
          );
        } else if (isAlreadyInBasket) {
          setModalMessage("Ce cours est déjà dans votre panier.");
        } else if (isAlreadyBuy) {
          setModalMessage(
            "Vous êtes déjà inscrit à ce cours. Rendez-vous dans la rubrique 'Mon compte' pour le consulter."
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
      setModalMessage("Vous devez vous connecter vous inscrire.");
      handleShowModal();
    }
  };

  return (
    <Fade arrows={false} easing="ease" indicators={true}>
      {slideImages.map((slideImage, index) => (
        <div className="each-slide" key={index}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: isMobile ? "100%" : "83vh",
              backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), url(${slideImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginTop: 90,
              paddingBottom: isMobile ? "20px" : 0,
            }}
          >
            <MainContainer isMobile={isMobile}>
              <TitleContainer>
                Bienvenue sur Amala Sangha : le site des cours, stages et
                retraites de yoga et méditation de Yogapsy !
              </TitleContainer>
              <SubTitleContainer></SubTitleContainer>
              {/* <button onClick={() => history.push("paiement-test")}>
                TEST CAMILLE
              </button> */}
              <TextContainer>
                <p>
                  Les cours de yoga prennent soin du corps par la pratique de
                  postures ou asanas, de l’esprit notamment avec les exercices
                  de respirations ou pranayamas, mais aussi de l’âme avec les
                  temps de méditations, dyanas.
                </p>
                <p>
                  La pratique régulière, ou Sadhana, accélère la transformation
                  de votre être proposé dans les accompagnements Yogapsy vers
                  l’émergence de votre nature véritable, votre Soi qui est paix
                  amour et félicité.
                </p>
              </TextContainer>
              <ButtonContainer isMobile={isMobile}>
                {props.user && !props.user.isLogged && (
                  <Button
                    id="primary-btn"
                    variant="primary"
                    onClick={() => history.push("/register")}
                    style={{
                      marginRight: isMobile ? 0 : 10,
                      marginBottom: isMobile ? 10 : 0,
                    }}
                  >
                    Créer un compte
                  </Button>
                )}
                {directClassInfo && directClassInfo.isAvailable === 1 && (
                  <Button
                    id="primary-btn"
                    variant="primary"
                    onClick={() => buyClasses(directClass)}
                    style={{ padding: 20, fontSize: 25 }}
                  >
                    M'inscrire au prochain cours en direct
                  </Button>
                )}
              </ButtonContainer>
              <RegisterDirectClassModal
                show={showModal}
                handleClose={handleCloseModal}
                handleShow={handleShowModal}
                modalMessage={modalMessage}
              />
            </MainContainer>
          </div>
        </div>
      ))}
    </Fade>
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);
