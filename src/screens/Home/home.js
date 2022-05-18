import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import { getStart } from "../../utils/API/API";
import { Fade } from "react-slideshow-image";
import imageFond1 from "../../assets/imageFond1.jpeg";
import imageFond2 from "../../assets/shiva.jpg";
import Button from "react-bootstrap/Button";
import { useMediaQuery } from "react-responsive";

const MainContainer = styled.div`
  width: ${(props) => (props.isMobile ? "" : "50%")};
  margin-top: ${(props) => (props.isMobile ? "50px" : "")};
`;

const TitleContainer = styled.p`
  color: white;
  font-weight: 700;
  font-size: 32px;
  padding: 30px;
  text-align: left;
`;

const ButtonContainer = styled.div`
  display: flex;
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

  const isMobile = useMediaQuery({ query: "(max-width: 975px)" });

  const slideImages = [imageFond1, imageFond2];
  let history = useHistory();
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
              backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${slideImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginTop: 90,
              paddingBottom: isMobile ? "20px" : 0,
            }}
          >
            <MainContainer isMobile={isMobile}>
              <TitleContainer>
                Bienvenue sur le site de Amala Sangha !
              </TitleContainer>
              <TextContainer>
                <p>
                  Amala Sangha vous accompagne à travers la philosophie du yoga
                  dans les 3 dimensions de l’être : corps, âme, esprit.
                </p>
                <p>
                  Les cours de yoga prennent soin du corps par la pratique de
                  postures ou asanas, de l’esprit notamment avec les exercices
                  de respirations ou pranayamas, mais aussi de l’âme avec les
                  temps de méditations, dyanas.
                </p>
                <p>
                  Le corps et l’esprit sont au service de notre âme, de notre
                  Soi pour aller vers l’épanouissement de l’être.
                </p>
              </TextContainer>
              <ButtonContainer>
                <Button
                  id="primary-btn"
                  variant="primary"
                  onClick={() => history.push("/register")}
                >
                  Je m'inscris
                </Button>
              </ButtonContainer>
            </MainContainer>
          </div>
        </div>
      ))}
    </Fade>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
