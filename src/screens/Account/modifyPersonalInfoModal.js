import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import { setUser } from "../../utils/API/userApi";
import moment from "moment";
const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
`;

const ModifyPersonalInfoModal = (props) => {
  const [lastName, setLastName] = useState("");
  const [firstName, setfirstName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [birthDate, setBirthDate] = useState("");

  useEffect(() => {
    if (props.user && props.user.infos) {
      setLastName(props.user.infos.lastName);
      setfirstName(props.user.infos.firstName);
      setEmail(props.user.infos.email);
      setBirthDate(props.user.infos.birthdate);
    }
  }, [props.user]);

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
      case "birthDate":
        setBirthDate(value);
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
      birthDate: birthDate,
      isMember: props.user.infos.isMember,
      last_paiement_cotisation_date:
        props.user.infos.last_paiement_cotisation_date,
    };
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError("Veuillez saisir un email valide");
    } else if (firstName === "" || firstName === "") {
      setError("Veuillez remplir les champs obligatoires");
    } else {
      setUser(data, props.user.infos.id)
        .then((res) => {
          if (res.status === 200) {
            if (res.data.status === 200) {
              setError("");
              props.handleClose();
              window.location.reload(false);
            }
          }
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modifier mes informations</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {" "}
        <Form>
          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label style={{ color: "#625454" }}>Nom *</Form.Label>
            <Form.Control
              onChange={(e) => handleChange("lastName", e.target.value)}
              type="text"
              value={lastName}
              placeholder="Entrer votre nom"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label style={{ color: "#625454" }}>Prénom *</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => handleChange("firstName", e.target.value)}
              placeholder="Entrer votre prénom"
              value={firstName}
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
              value={email}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label style={{ color: "#625454" }}>
              Date de naissance
            </Form.Label>
            <Form.Control
              type="date"
              onChange={(e) => handleChange("birthDate", e.target.value)}
              placeholder="Entrer votre date de naissance"
              value={moment(birthDate).format("yyyy-MM-DD")}
            />
            <Form.Text className="text-muted">
              Cette information non obligatoire a pour but d'adapter nos cours à
              nos élèves.
            </Form.Text>
          </Form.Group>

          <ErrorMessage>{error}</ErrorMessage>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button id="primary-btn" variant="primary" onClick={handleSubmit}>
          Sauvegarder
        </Button>

        <Button variant="secondary" onClick={props.handleClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {
    user: store.user,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModifyPersonalInfoModal);
