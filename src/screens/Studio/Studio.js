import React, { useState, useEffect, useReducer } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  cleanBasket,
  deleteInBasket,
} from "../../actions/basket/basketActions";
import { FaTrash } from "react-icons/fa";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 40px;
  min-height: 96vh;
`;

const TitleContainer = styled.div`
  color: white;
  font-size: 30px;
  margin-bottom: 30px;
`;

const BasketContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: white;
  border-radius: 12px;
  max-width: 50%;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
`;

const Studio = (props) => {
  const classes =
    props.yogaClasses &&
    props.yogaClasses.array.length &&
    props.yogaClasses.array[0];

  return (
    <MainContainer>
      <TitleContainer>{classes && classes.name}</TitleContainer>
      <BasketContainer>
        <iframe
          width="650px"
          height="400px"
          src="https://www.youtube.com/embed/V9pUqcU1VcQ"
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
