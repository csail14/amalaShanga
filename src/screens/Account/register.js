import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ReCAPTCHA from "react-google-recaptcha";
import { addUser } from "../../utils/API/userApi";
const MainContainer = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #9fc3d7;
  min-height: 96vh;
`;

const TitleContainer = styled.p`
  color: white;
  font-weight: 700;
  font-size: 32px;
  text-align: center;
`;

const SubTitleContainer = styled.p`
  color: white;
  font-size: 18px;
  text-align: center;
  margin: 20px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 450px;
  color: white;
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
const Home = (props) => {
  const [lastName, setLastName] = useState("");
  const [firstName, setfirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthDate, setBirthDate] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isCaptchaVerified, setCaptchaVerified] = useState(false);
  const [isUserCreated, setIsUserCreated] = useState(false);

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
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      case "birthDate":
        setBirthDate(value);
        break;
      case "photo":
        setPhoto(value);
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
      password: password,
      birthDate: birthDate,
      photo: photo,
    };
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError("Veuillez saisir un email valide");
    } else if (firstName === "" || firstName === "" || password === "") {
      setError("Veuillez remplir les champs obligatoires");
    } else if (password !== confirmPassword) {
      setError("Vos mots de passes ne sont pas identiques");
    } else if (!isCaptchaVerified) {
      setError("Merci de valider le captcha");
    } else {
      addUser(data)
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
  const onValidateCaptcha = (e) => {
    if (e) {
      setCaptchaVerified(true);
    }
  };

  return (
    <MainContainer>
      <TitleContainer>Creez votre compte Amala Sangha</TitleContainer>
      <SubTitleContainer>
        Votre compte vous permettera, une fois votre cotisation annuelle réglée,
        de choisir vos cours de yoga en ligne parmis une sélection proposée au
        tarif préferentiel de 9 euros par cours, et d'acceder gratuitement à la
        méditation en ligne hebdomadaire.
      </SubTitleContainer>
      <InfoContainer>
        {!success && (
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Nom *</Form.Label>
              <Form.Control
                onChange={(e) => handleChange("lastName", e.target.value)}
                type="text"
                placeholder="Entrer votre nom"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Prénom *</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => handleChange("firstName", e.target.value)}
                placeholder="Entrer votre prénom"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Adresse Email *</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="Entrer votre email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mot de passe *</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => handleChange("password", e.target.value)}
                placeholder="Entrer votre mot de passe"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirmation du mot de passe *</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) =>
                  handleChange("confirmPassword", e.target.value)
                }
                placeholder="Entrer votre mot de passe"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Date de naissance JJ/MM/AA</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => handleChange("birthDate", e.target.value)}
                placeholder="Entrer votre date de naissance"
              />
              <Form.Text className="text-muted">
                Cette information non obligatoire a pour but d'adapter nos cours
                à nos élèves.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Ajouter une photo</Form.Label>
              <Form.Control
                onChange={(e) => handleChange("photo", e.target.value)}
                type="file"
              />
            </Form.Group>
            <ReCAPTCHA
              sitekey="6LcLjWgdAAAAAC0Pb4Gpcxy2XbRt-FQII1NCX0LR"
              onChange={onValidateCaptcha}
            />

            <Button
              onClick={handleSubmit}
              style={{ marginTop: 15 }}
              variant="primary"
              type="submit"
            >
              Créer mon compte
            </Button>
            <ErrorMessage>{error}</ErrorMessage>
          </Form>
        )}

        {success && (
          <SuccessMessage>
            Votre compte a bien été créé, rendez-vous dans votre espace mon
            compte pour vous connecter.
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
