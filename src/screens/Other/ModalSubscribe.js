import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { subscribeStage } from "../../utils/API/mailApi";

const ModalSubscribe = (props) => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [transport, setTransport] = useState("");
  const [room, setRoom] = useState("Chambre double 300€");
  const [comments, setComments] = useState("");
  const [error, setError] = useState("");

  const stageTitle = "Stage Yoga Juillet";

  const submit = () => {
    let data = {
      lastName: lastName,
      firstName: firstName,
      stageTitle: stageTitle,
      email: email,
      transport: transport,
      room: room,
      comments: comments,
    };
    if (
      lastName === "" ||
      firstName === "" ||
      email === "" ||
      transport === ""
    ) {
      setError("Veuillez remplir tous les champs marqués d'une astérisque");
    } else {
      subscribeStage(data)
        .then((res) => {
          setError("");
          if (res.status === 200) {
            console.log(res);
            props.handleClose();
            props.handleShowModalValidation();
          } else {
            setError("Une erreur s'est produite");
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>M'inscrire au stage</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              required
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Entrer votre nom *"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Prénom</Form.Label>
            <Form.Control
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="Entrer votre prénom *"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Entrer votre email * "
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              onChange={(e) => setTransport(e.target.value)}
              rows={3}
              placeholder="Précisez ici comment vous vous rendez sur le lieu du stage *"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Votre chambre</Form.Label>
            <Form.Select
              onChange={(e) => setRoom(e.target.value)}
              aria-label="Default select example"
            >
              <option value={"Chambre double 300€"}>Chambre double 300€</option>
              <option value={"Chambre en dortoir 275€"}>
                Chambre en dortoir 275€
              </option>
              <option value={"Chambre seule 400€"}>Chambre seule 400€</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              onChange={(e) => setComments(e.target.value)}
              rows={3}
              placeholder="Avez vous un détail à apporter ? "
            />
          </Form.Group>
        </Form>
        <Form.Label>{error}</Form.Label>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Fermer
        </Button>
        <Button variant="primary" onClick={submit}>
          Envoyer mon inscription
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalSubscribe);
