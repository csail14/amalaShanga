import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ReCAPTCHA from "react-google-recaptcha";
import { sendContact } from "../../utils/API/mailApi";
import Fond3 from "../../assets/lotus.jpeg";
import { useMediaQuery } from "react-responsive";

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
  margin: ${(props) => (props.isMobile ? "0px" : "0 250px")};
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
const Contact = (props) => {
  const [lastName, setLastName] = useState("");
  const [firstName, setfirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isCaptchaVerified, setCaptchaVerified] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 975px)" });
  const handleChange = (type, value) => {
    switch (type) {
      case "lastName":
        setLastName(value);
        break;
      case "firstName":
        setfirstName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    setError("");
    e.preventDefault();
    let data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
    };
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError("Veuillez saisir un email valide");
    } else if (firstName === "" || firstName === "" || message === "") {
      setError("Veuillez remplir les champs obligatoires");
    } else if (!isCaptchaVerified) {
      setError("Merci de valider le captcha");
    } else {
      sendContact(data)
        .then((res) => {
          if (res.status === 200) {
            setSuccess(true);
            setError("");
          }
        })
        .catch((error) => console.log(error));
    }
  };
  const onValidateCaptcha = (e) => {
    if (e) {
      setCaptchaVerified(true);
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
      <TitleContainer>Contactez-nous</TitleContainer>
      <InfoContainer isMobile={isMobile}>
        {!success && (
          <Form style={{ width: "80%" }}>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label style={{ color: "#625454" }}>Nom *</Form.Label>
              <Form.Control
                onChange={(e) => handleChange("lastName", e.target.value)}
                type="text"
                placeholder="Entrer votre nom"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label style={{ color: "#625454" }}>Prénom *</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => handleChange("firstName", e.target.value)}
                placeholder="Entrer votre prénom"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ color: "#625454" }}>
                Adresse Email *
              </Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="Entrer votre email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label style={{ color: "#625454" }}>Message *</Form.Label>
              <Form.Control
                type="text"
                style={{ minHeight: "200px" }}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Entrer votre message"
              />
            </Form.Group>
            <ReCAPTCHA
              sitekey="6LcLjWgdAAAAAC0Pb4Gpcxy2XbRt-FQII1NCX0LR"
              onChange={onValidateCaptcha}
            />
            <Button
              id="primary-btn"
              onClick={handleSubmit}
              style={{ marginTop: 15 }}
              variant="primary"
              type="submit"
            >
              Envoyer mon message
            </Button>
            <ErrorMessage>{error}</ErrorMessage>
          </Form>
        )}

        {success && (
          <SuccessMessage>
            Votre message a bien été envoyé, nous reviendrons vers vous
            rapidemment.
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
