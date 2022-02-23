import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { addYoga } from "../../../../utils/API/yogaApi";

const ModalAddClasses = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const [isAvailable, setIsAvailable] = useState(true);

  const submit = () => {
    let data = {
      name: name,
      description: description,
      price: price,
      url: url,
      isAvailable: isAvailable,
    };
    addYoga(data)
      .then((res) => {
        if (res.data.status === 200) {
          props.handleClose();
          window.location.reload();
        } else {
          console.log("afficher une erreur");
        }
      })
      .catch((err) => console.log("erreur ajout cours", err));
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ajouter un cours</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Entrer nom du cours"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Prix €</Form.Label>
            <Form.Control
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              placeholder="Entrer le prix cours"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              placeholder="Entrer la description cours"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Lien vers la video Youtube</Form.Label>
            <Form.Control
              onChange={(e) => setUrl(e.target.value)}
              type="text"
              placeholder="Entrer le lien"
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Ajouter une photo</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Form.Select
            onChange={(e) => setIsAvailable(e.target.value)}
            aria-label="Default select example"
          >
            <option value={true}>Disponible</option>
            <option value={false}>Non disponible</option>
          </Form.Select>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Fermer
        </Button>
        <Button variant="primary" onClick={submit}>
          Ajouter le cours
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddClasses);
