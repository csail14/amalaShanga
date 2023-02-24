import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { FaTrash, FaPen } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import ModalAddClasses from "./ModalAddClasses";
import ModalEditClasses from "./ModalEditClasses";
import ModalDeleteClasses from "./ModalDeleteClasses";
import { useMediaQuery } from "react-responsive";

const SubTitleContainer = styled.p`
  color: grey;
  font-weight: 700;
  font-size: 20px;
  text-align: left;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 96vh;
  flex-direction: column;
  background: #f8f9fa;
  margin: ${(props) => (props.isMobile ? "" : "10px 50px")};
  color: white;
  border: 0.5px solid white;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
`;

const InfoDetailsContainer = styled.div`
  margin: 8px;
  padding: 10px;
`;

const AllInfoDetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 12px;
  background-color: white;
  margin: 5px 0;
  color: grey;
  border: 0.5px solid grey;
`;

const Classes = (props) => {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [deleteItem, setDeleteItem] = useState(null);
  const [editItem, setEditItem] = useState(null);

  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);
  const handleCloseEdit = () => setShowEdit(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowEdit = (item) => {
    setShowEdit(true);
    setEditItem(item);
  };
  const handleShowDelete = (item) => {
    setShowDelete(true);
    setDeleteItem(item);
  };
  const isMobile = useMediaQuery({ query: "(max-width: 975px)" });

  const classes =
    props.yogaClasses &&
    props.yogaClasses.array &&
    props.yogaClasses.array
      .filter((item) => item.type === "replay")
      .sort(function (a, b) {
        return new Date(b.creation_date) - new Date(a.creation_date);
      });

  return (
    <InfoContainer isMobile={isMobile}>
      <Button
        onClick={handleShowAdd}
        style={{ width: "fit-content", margin: "5px", margin: " 0 auto" }}
      >
        Ajouter un cours en replay
      </Button>
      <SubTitleContainer>Les cours en replay </SubTitleContainer>
      {classes &&
        classes.map((item, index) => {
          return (
            <AllInfoDetailsContainer
              key={index}
              className="onHoverIsBorderGrey"
            >
              <InfoDetailsContainer>
                <b>Image:</b>{" "}
                {item.image && (
                  <a href={item.image} target="_blank" rel="noreferrer">
                    Lien
                  </a>
                )}
              </InfoDetailsContainer>
              <InfoDetailsContainer>
                <b>Nom:</b>
                {item.name}
              </InfoDetailsContainer>
              <InfoDetailsContainer>
                <b>Description:</b> {item.description}
              </InfoDetailsContainer>
              <InfoDetailsContainer>
                <b>Lien:</b> {item.url}
              </InfoDetailsContainer>
              <InfoDetailsContainer>
                <b>Etat:</b> {item.isAvailable ? "En ligne" : "Hors ligne"}
              </InfoDetailsContainer>
              <InfoDetailsContainer>
                <b>Prix:</b> {item.price} €
              </InfoDetailsContainer>
              <InfoDetailsContainer>
                <FaTrash
                  style={{ cursor: "pointer" }}
                  onClick={() => handleShowDelete(item)}
                />
                <FaPen
                  style={{ cursor: "pointer", marginLeft: 20 }}
                  onClick={() => handleShowEdit(item)}
                />
              </InfoDetailsContainer>
            </AllInfoDetailsContainer>
          );
        })}

      <ModalAddClasses
        show={showAdd}
        handleClose={handleCloseAdd}
        handleShow={handleShowAdd}
      />
      <ModalEditClasses
        show={showEdit}
        handleClose={handleCloseEdit}
        handleShow={handleShowEdit}
        editItem={editItem}
      />
      <ModalDeleteClasses
        show={showDelete}
        handleClose={handleCloseDelete}
        handleShow={handleShowDelete}
        deleteItem={deleteItem}
      />
    </InfoContainer>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return { yogaClasses: store.yogaClasses };
};

export default connect(mapStateToProps, mapDispatchToProps)(Classes);
