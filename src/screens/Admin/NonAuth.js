import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Fond3 from "../../assets/imageFond3.jpeg";

const MainContainer = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  min-height: 96vh;
`;

const TitleContainer = styled.p`
  color: white;
  font-weight: 700;
  font-size: 32px;
  text-align: center;
`;

const NonAuth = (props) => {
  return (
    <MainContainer
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(${Fond3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <TitleContainer>
        Vous n'êtes pas autorisé à acceder à cette page.
      </TitleContainer>
    </MainContainer>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NonAuth);
