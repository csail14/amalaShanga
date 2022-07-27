import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Fond3 from "../../assets/imageFond3.jpeg";
import { useMediaQuery } from "react-responsive";
import { changePassword } from "../../utils/API/userApi";

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
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 975px)" });
  const handleChange = (type, value) => {
    switch (type) {
      case "password":
        setPassword(value);
        break;
      case "password2":
        setPassword2(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    setError("");
    e.preventDefault();
    let key_id = props.match.params.key_id;
    if (password !== "" && password === password2) {
      let data = {
        password1: password,
        password2: password2,
      };
      console.log(key_id);
      changePassword(data, key_id).then((res) => {
        if (res.status === 200) {
          setSuccess(true);
          setError("");
        }
        if (res.status === 201) {
          setSuccess(false);
          setError("Une erreur est survenue");
        }
      });
    } else {
      setSuccess(false);
      setError("Une erreur est survenue");
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
      <TitleContainer>Votre nouveau mot de passe </TitleContainer>
      <InfoContainer isMobile={isMobile}>
        {!success && (
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ color: "#625454" }}>
                Entrer votre nouveau mot de passe :
              </Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => handleChange("password", e.target.value)}
                placeholder="Entrer votre nouveau mot de passe"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ color: "#625454" }}>
                Une seconde fois :
              </Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => handleChange("password2", e.target.value)}
                placeholder="Entrer votre nouveau mot de passe"
              />
            </Form.Group>

            <Button
              id="primary-btn"
              onClick={handleSubmit}
              style={{ marginTop: 15 }}
              variant="primary"
              type="submit"
            >
              Enregistrer
            </Button>
            <ErrorMessage>{error}</ErrorMessage>
          </Form>
        )}

        {success && (
          <SuccessMessage>Votre mot de passe a bien été modifié</SuccessMessage>
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
