import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { editYoga } from "../../../../utils/API/yogaApi";
import PhotoUploader from "../../../../service/PhotoUploader";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const ModalEditClasses = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const [isAvailable, setIsAvailable] = useState();

  useEffect(() => {
    if (props.editItem) {
      setName(props.editItem.name);
      setPrice(props.editItem.price);
      setDescription(props.editItem.description);
      setUrl(props.editItem.url);
      setIsAvailable(props.editItem.isAvailable);
      setImage(props.editItem.image);
    }
  }, [props.editItem]);

  const submit = () => {
    let data = {
      name: name,
      description: description,
      price: price,
      url: url,
      isAvailable: isAvailable,
      image: image,
    };
    editYoga(data, props.editItem.id)
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
  console.log("editItem", props.editItem);

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modifier un cours</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Entrer nom du cours"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Prix €</Form.Label>
            <Form.Control
              value={price}
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Entrer le prix cours"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              placeholder="Entrer la description cours"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Lien vers la video Youtube</Form.Label>
            <Form.Control
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              type="text"
              placeholder="Entrer le lien"
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            {image && (
              <Button className="mb-3">
                <a href={image} target="_blank" rel="noreferrer">
                  Voir ma photo
                </a>
              </Button>
            )}
            <PhotoUploader setImage={setImage} image={image} />
          </Form.Group>
          <Form.Select
            value={isAvailable}
            onChange={(e) => setIsAvailable(e.target.value)}
            aria-label="Default select example"
          >
            <option value={1}>Disponible</option>
            <option value={0}>Non disponible</option>
          </Form.Select>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Fermer
        </Button>
        <Button variant="primary" onClick={submit}>
          Enregistrer le cours
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
