import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setUser } from "../../../../utils/API/userApi";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import moment from "moment";

const ModalEditClasses = (props) => {
  const [lastName, setLastName] = useState("");
  const [firstName, setfirstName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [isMember, setIsMember] = useState("");
  const [paymentDate, setPaymentDate] = useState("");

  useEffect(() => {
    if (props.editItem) {
      setfirstName(props.editItem.firstName);
      setLastName(props.editItem.lastName);
      setEmail(props.editItem.email);
      setBirthDate(props.editItem.birthdate);
      setIsMember(props.editItem.isMember);
      setPaymentDate(props.editItem.last_paiement_cotisation_date);
    }
  }, [props.editItem]);

  const submit = (e) => {
    e.preventDefault();
    let data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      birthdate: birthDate,
      isMember: isMember,
      last_paiement_cotisation_date: paymentDate,
    };
    setUser(data, props.editItem.id)
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
        <Modal.Title>Modifier un membre</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Prénom</Form.Label>
            <Form.Control
              value={firstName}
              type="text"
              onChange={(e) => setfirstName(e.target.value)}
              placeholder="Entrer le prénom"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              value={lastName}
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Entrer le nom"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              as="textarea"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              rows={3}
              placeholder="Entrer la description cours"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label style={{ color: "#625454" }}>
              Date de naissance
            </Form.Label>
            <Form.Control
              type="date"
              onChange={(e) => setBirthDate(e.target.value)}
              placeholder="Entrer votre date de naissance"
              value={moment(birthDate).format("yyyy-MM-DD")}
            />
          </Form.Group>
          <Form.Select
            value={isMember}
            onChange={(e) => setIsMember(e.target.value)}
            aria-label="Default select example"
          >
            <option value={1}>Oui</option>
            <option value={0}>Non</option>
          </Form.Select>
          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label style={{ color: "#625454" }}>
              Date de dernier Paiement
            </Form.Label>
            <Form.Control
              type="date"
              onChange={(e) => setPaymentDate(e.target.value)}
              placeholder="Entrer la date"
              value={moment(paymentDate).format("yyyy-MM-DD")}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Fermer
        </Button>
        <Button variant="primary" onClick={submit}>
          Enregistrer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditClasses);
