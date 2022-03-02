import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const ModalSubscribe = (props) => {
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
    console.log(data);
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Inscription envoyé</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Label>
          Merci pour votre inscription. Je reviendrai personnellement vers vous
          pour confirmer pour inscription
        </Form.Label>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Fermer
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
