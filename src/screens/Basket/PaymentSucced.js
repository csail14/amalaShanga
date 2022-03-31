import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { loginUser, getUserById } from "../../utils/API/userApi";
import { loadUserInfo } from "../../actions/user/userActions";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  margin-top: 10px;
`;

const SubTitleContainer = styled.p`
  color: #625454;
  font-size: 18px;
  text-align: center;
  margin: 20px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => (props.isMobile ? "10px" : "0 450px")};
  background-color: rgb(255, 255, 255, 0.5);
  color: white;
  border: 0.5px solid white;
  border-radius: 12px;
  padding: 12px;
`;

const PaymentSucced = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterrorMessage] = useState("");
  const [redirect, setRedirect] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 975px)" });
  const storeData = async (token) => {
    try {
      await AsyncStorage.setItem("AmalaToken", token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSumit = (e) => {
    e.preventDefault();
    let data = {
      email: email,
      password: password,
    };
    loginUser(data).then((res) => {
      seterrorMessage("");
      if (res.status === 200) {
        storeData(res.token);

        getUserById(res.user.id).then((res) => {
          props.loadUserInfo(true, res.result);
          setRedirect(true);
        });
      } else if (res.status === 404) {
        seterrorMessage(res.msg);
      } else if (res.status === 401) {
        seterrorMessage(res.msg);
      } else if (res.status === 403) {
        seterrorMessage(res.msg);
      } else {
        seterrorMessage(
          "Un problème est survenu, veuillez reessayer plus tard."
        );
      }
    });
  };

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
        Votre paiement à été réalisé avec succès. Rendez-vous dans Mon Compte
        pour voir vos nouveautés.
      </TitleContainer>
    </MainContainer>
  );
};

const mapDispatchToProps = { loadUserInfo };

const mapStateToProps = (store) => {
  return { user: store.user };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentSucced);
