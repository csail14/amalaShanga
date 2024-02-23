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
  const [comments, setComments] = useState("");
  const [error, setError] = useState("");
  const stageTitle = "Stage Gretz Septembre";
  const isLogged = props.user && props.user.isLogged;
  const isMember = isLogged && props.user.infos && props.user.infos.isMember;
  const isAuthorize = isLogged && isMember;

  const submit = () => {
    let data = {
      lastName: props.user.infos.firstName,
      firstName: props.user.infos.lastName,
      stageTitle: stageTitle,
      email: props.user.infos.email,
      comments: comments,
    };

    subscribeStage(data)
      .then((res) => {
        setError("");
        if (res.status === 200) {
          props.handleClose();
          props.handleShowModalValidation();
        } else {
          setError("Une erreur s'est produite");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>M'inscrire au stage du 7 - 10 Septembre 2023</Modal.Title>
      </Modal.Header>
      {isAuthorize ? (
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => setLastName(e.target.value)}
                disabled
                value={props.user.infos.lastName}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                disabled
                value={props.user.infos.firstName}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                disabled
                value={props.user.infos.email}
              />
            </Form.Group>
            {/* <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                onChange={(e) => setTransport(e.target.value)}
                rows={3}
                placeholder="Précisez ici comment vous vous rendez sur le lieu du stage *"
              />
            </Form.Group> */}
            <Form.Group className="mb-3">
              <Form.Label>
                <b>Hébergement</b>
              </Form.Label>
              <Form.Label>
                Pension complète en chambre de 2/3 personnes. 180 € à régler par
                chèque sur place.
              </Form.Label>
              <Form.Label>
                <b>Frais d'inscription</b>
              </Form.Label>
              <Form.Label>
                300 € à régler auprès de l'associtaion, nous vous contacterons
                pour les modalités de paiement.
              </Form.Label>
              {/* <Form.Select
                onChange={(e) => setRoom(e.target.value)}
                aria-label="Default select example"
              >
                <option value={"Chambre double 300€"}>
                  Chambre double 300€
                </option>
                <option value={"Chambre en dortoir 275€"}>
                  Chambre en dortoir 275€
                </option>
                <option value={"Chambre seule 400€"}>Chambre seule 400€</option>
              </Form.Select> */}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                onChange={(e) => setComments(e.target.value)}
                rows={3}
                placeholder="Avez vous une question ? "
              />
            </Form.Group>
          </Form>
          <Form.Label>{error}</Form.Label>
        </Modal.Body>
      ) : (
        <Modal.Body>
          Vous devez être connecté et à jour dans votre cotisation pour
          participer au stage.
        </Modal.Body>
      )}

      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Fermer
        </Button>
        {isAuthorize && (
          <Button variant="primary" onClick={submit}>
            Envoyer mon inscription
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return { user: store.user };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalSubscribe);
