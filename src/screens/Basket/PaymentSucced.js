import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { loadUserInfo } from "../../actions/user/userActions";
import Fond3 from "../../assets/imageFond3.jpeg";
import { useMediaQuery } from "react-responsive";

const MainContainer = styled.div`
  padding-top: ${(props) => (props.isMobile ? "100px" : "100px")};
  padding-bottom: 40px;
  min-height: 96vh;
`;

const TitleContainer = styled.p`
  color: #625454;
  font-weight: 700;
  font-size: 32px;
  text-align: center;
`;

const PaymentSucced = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 975px)" });

  return (
    <MainContainer
      isMobile={isMobile}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(${Fond3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <TitleContainer>Votre paiement a été réalisé avec succès.</TitleContainer>
      <TitleContainer>
        Rendez-vous dans Mon Compte pour voir vos nouveautés.
      </TitleContainer>
    </MainContainer>
  );
};

const mapDispatchToProps = { loadUserInfo };

const mapStateToProps = (store) => {
  return { user: store.user };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentSucced);
