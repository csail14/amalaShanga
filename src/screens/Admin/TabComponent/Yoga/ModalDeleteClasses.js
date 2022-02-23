import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteYogaById } from "../../../../utils/API/yogaApi";

const TitleContainer = styled.p`
  text-align: center;
`;

const ModalAddClasses = (props) => {
  console.log(props.deleteItem);

  const deleteItem = () => {
    deleteYogaById(props.deleteItem.id)
      .then((res) => {
        if (res.status === 200) {
          props.handleClose();
          window.location.reload();
        } else {
          console.log("error");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Supprimer un cours</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TitleContainer>
          Etes vous vraiment sur de vouloir supprimer le cours{" "}
          <b>{props.deleteItem && props.deleteItem.name} </b>?
        </TitleContainer>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Fermer
        </Button>
        <Button variant="primary" onClick={deleteItem}>
          Supprimer
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
