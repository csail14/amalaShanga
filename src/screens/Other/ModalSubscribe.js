import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import SentSubscribeModal from "./SentSubscribeModal";

const ModalSubscribe = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  const [isAvailable, setIsAvailable] = useState(true);

  const submit = () => {
    let data = {
      name: name,
      description: description,
      price: price,
      url: url,
      isAvailable: isAvailable,
    };
    props.handleClose();
    props.handleShowModalValidation();
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
              onChange={(e) => setName(e.target.value)}
              placeholder="Entrer votre nom *"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Prénom</Form.Label>
            <Form.Control
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              placeholder="Entrer votre prénom *"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(e) => setPrice(e.target.value)}
              type="email"
              placeholder="Entrer votre email * "
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              placeholder="Précisez ici comment vous vous rendez sur le lieu du stage *"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Votre chambre</Form.Label>
            <Form.Select
              onChange={(e) => setIsAvailable(e.target.value)}
              aria-label="Default select example"
            >
              <option value={false}>Chambre double 300€</option>
              <option value={false}>Chambre en dortoir 275€</option>
              <option value={true}>Chambre seule 400€</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              placeholder="Avez vous un détail à apporter ? "
            />
          </Form.Group>
        </Form>
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
