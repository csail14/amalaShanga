import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Fond3 from "../../assets/imageFond3.jpeg";
import { useMediaQuery } from "react-responsive";
import { forgotPassword } from "../../utils/API/userApi";

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

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => (props.isMobile ? "0px" : "0 450px")};
  color: white;
  background-color: rgb(255, 255, 255, 0.5);
  border: 0.5px solid white;
  border-radius: 12px;
  padding: 12px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
`;
const SuccessMessage = styled.p`
  color: green;
  font-weight: bold;
`;
const Register = (props) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 975px)" });
  const handleChange = (type, value) => {
    switch (type) {
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    setError("");
    e.preventDefault();
    let data = {
      email: email,
    };
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError("Veuillez saisir un email valide");
    } else {
      forgotPassword(data)
        .then((res) => {
          if (res.status === 200) {
            if (res.data.status === 501) {
              setError(
                "Un compte utilise déjà cette adresse mail, veuillez vous connecter ou choisir une autre adresse mail."
              );
            } else if (res.data.status === 200) {
              setSuccess(true);
              setError("");
            }
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <MainContainer
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(${Fond3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <TitleContainer>Mot de passe oublié ?</TitleContainer>
      <InfoContainer isMobile={isMobile}>
        {!success && (
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ color: "#625454" }}>
                Entrer votre mail :
              </Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="Entrer votre email"
              />
            </Form.Group>

            <Button
              id="primary-btn"
              onClick={handleSubmit}
              style={{ marginTop: 15 }}
              variant="primary"
              type="submit"
            >
              Demander un nouveau mot de passe
            </Button>
            <ErrorMessage>{error}</ErrorMessage>
          </Form>
        )}

        {success && (
          <SuccessMessage>
            Si votre compte existe vous allez recevoir un mail.
          </SuccessMessage>
        )}
      </InfoContainer>
    </MainContainer>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
