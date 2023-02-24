import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "dayjs/locale/fr";
import styled from "styled-components";
import { FaTrash, FaPen } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import ModalAddClasses from "./ModalAddDirectClasses";
import ModalEditClasses from "../YogaReplay/ModalEditClasses";
import ModalDeleteClasses from "../YogaReplay/ModalDeleteClasses";
import TextField from "@mui/material/TextField";
import { useMediaQuery } from "react-responsive";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Form from "react-bootstrap/Form";
import {
  getActivitiesById,
  editActivities,
} from "../../../../utils/API/activitiesApi";

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

const YogaDirectList = (props) => {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());
  const [deleteItem, setDeleteItem] = useState(null);
  const [editItem, setEditItem] = useState(null);
  const [isDirectClasseOn, setIsDirectClassOn] = useState(null);
  const [directClassSelected, setDirectClassSelected] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    getActivitiesById(5).then((res) => {
      setIsDirectClassOn(res?.result?.isAvailable);
      setDirectClassSelected(res?.result?.class_id);
      setDateTime(res?.result?.date);
    });
  }, []);

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

  const submit = () => {
    const body = {
      name: "directos",
      isAvailable: isDirectClasseOn,
      class_id: directClassSelected,
      date: dateTime,
    };
    editActivities(body, 5).then((res) => {
      if (res.status === 200) {
        setSuccess(true);
      }
    });
  };

  const classes =
    props.yogaClasses &&
    props.yogaClasses.array &&
    props.yogaClasses.array.filter((item) => item.type === "direct");

  return (
    <InfoContainer isMobile={isMobile}>
      <SubTitleContainer>Paramétrer un cours en direct </SubTitleContainer>
      <AllInfoDetailsContainer>
        <InfoDetailsContainer>
          Activer un cours en direct{" "}
          <Form.Select
            value={isDirectClasseOn}
            onChange={(e) => setIsDirectClassOn(e.target.value)}
            aria-label="Default select example"
            className="mb-3"
          >
            <option value={1}>Cours direct activé</option>
            <option value={0}>Cours direct désactivé</option>
          </Form.Select>
          <div>Choisir un cours</div>
          <Form.Select
            value={directClassSelected}
            onChange={(e) => setDirectClassSelected(e.target.value)}
            aria-label="Default select example"
            className="mb-3"
          >
            <option value={0}>Choisir un cours</option>
            {classes &&
              classes.map((item, index) => {
                return <option value={item.id}>{item.name}</option>;
              })}
          </Form.Select>
        </InfoDetailsContainer>
        <InfoDetailsContainer>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            Paramétrer l'heure et la date du cours en direct{" "}
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              adapterLocale={"fr"}
            >
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="DateTimePicker"
                value={dateTime}
                onChange={(newValue) => {
                  setDateTime(newValue);
                }}
              />
            </LocalizationProvider>
          </div>
        </InfoDetailsContainer>

        <Button id="primary-btn" variant="primary" onClick={submit}>
          Enregistrer
        </Button>
        {success && <Form.Text className="text-muted">Enregistré</Form.Text>}
      </AllInfoDetailsContainer>
      <Button
        onClick={handleShowAdd}
        style={{ width: "fit-content", margin: "5px", margin: " 0 auto" }}
      >
        Ajouter un cours en direct
      </Button>
      <SubTitleContainer>Les cours en direct </SubTitleContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(YogaDirectList);
