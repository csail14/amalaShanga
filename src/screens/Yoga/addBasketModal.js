import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalAddToBasket = (props) => {
  const isLogged = props.user && props.user.isLogged;
  const isMember = isLogged && props.user.infos && props.user.infos.isMember;
  let history = useHistory();
  const handleClick = () => {
    if (!isLogged) {
      history.push("/login");
    } else if (!isMember) {
      history.push("/myAccount");
    } else {
      history.push("/basket");
    }
    props.handleClose();
  };
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ajouter un cours</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLogged
          ? "Vous devez vous connecter pour acheter un cours."
          : // : !isMember
            // ? "Vous devez etre membre pour acheter un cours."
            "Votre cours a bien été ajouté au panier."}
      </Modal.Body>
      <Modal.Footer>
        <Button id="primary-btn" variant="primary" onClick={handleClick}>
          {!isLogged
            ? "Me connecter"
            : !isMember
            ? "Devenir membre"
            : "Voir mon panier"}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddToBasket);
