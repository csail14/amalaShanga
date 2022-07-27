import React from "react";
import Fond3 from "../../assets/imageFond3.jpeg";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  cleanBasket,
  deleteInBasket,
} from "../../actions/basket/basketActions";
import { useMediaQuery } from "react-responsive";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: ${(props) => (props.isMobile ? "100px" : "100px")};
  padding-bottom: 40px;
  min-height: 96vh;
`;
const BasketContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: white;
  border-radius: 12px;
  max-width: ${(props) => (props.isMobile ? "" : "50%")};
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
`;

const Studio = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 975px)" });
  const url =
    props.location && props.location.state && props.location.state.url;

  return (
    <MainContainer
      style={{
        backgroundImage: ` url(${Fond3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      isMobile={isMobile}
    >
      <BasketContainer isMobile={isMobile}>
        <iframe
          width={isMobile ? "100%" : "650px"}
          height={isMobile ? "100%" : "400px"}
          src={url}
          title="YouTube video player"
          frameborder="10"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
          allowfullscreen={true}
        ></iframe>
      </BasketContainer>
    </MainContainer>
  );
};

const mapDispatchToProps = { cleanBasket, deleteInBasket };

const mapStateToProps = (store) => {
  return { yogaClasses: store.yogaClasses };
};

export default connect(mapStateToProps, mapDispatchToProps)(Studio);
