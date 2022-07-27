import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { FaTrash, FaPen } from "react-icons/fa";
import { getAllUser } from "../../../../utils/API/userApi";
import { useMediaQuery } from "react-responsive";
import moment from "moment";
import ModalEditMembers from "./ModalEditMembers";

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

const Members = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 975px)" });
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

  const [members, setMembers] = useState([]);

  useEffect(() => {
    getAllUser()
      .then((res) => {
        if (res) {
          setMembers(res);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(members);
  return (
    <InfoContainer isMobile={isMobile}>
      <SubTitleContainer>Vos Membres </SubTitleContainer>
      {members &&
        members.map((item) => {
          return (
            <AllInfoDetailsContainer
              key={item.id}
              className="onHoverIsBorderGrey"
            >
              <InfoDetailsContainer>
                <b>Nom : </b>
                {item.lastName}
              </InfoDetailsContainer>
              <InfoDetailsContainer>
                <b>Prénom : </b> {item.firstName}
              </InfoDetailsContainer>
              <InfoDetailsContainer>
                <b>Date de naissance :</b> {moment(item.birthdate).format("LL")}
              </InfoDetailsContainer>
              <InfoDetailsContainer>
                <b>Email :</b> {item.email}
              </InfoDetailsContainer>
              <InfoDetailsContainer>
                <b>Cotisation payée :</b> {item.isMember === 1 ? "Oui" : "Non"}
              </InfoDetailsContainer>
              <InfoDetailsContainer>
                <b>Date du dernier payment :</b>{" "}
                {moment(item.last_paiement_cotisation_date).format("LL")}
              </InfoDetailsContainer>

              <InfoDetailsContainer>
                <FaPen
                  style={{ cursor: "pointer", marginLeft: 20 }}
                  onClick={() => handleShowEdit(item)}
                />
              </InfoDetailsContainer>
            </AllInfoDetailsContainer>
          );
        })}
      <ModalEditMembers
        show={showEdit}
        handleClose={handleCloseEdit}
        handleShow={handleShowEdit}
        editItem={editItem}
      />
    </InfoContainer>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return { yogaClasses: store.yogaClasses };
};

export default connect(mapStateToProps, mapDispatchToProps)(Members);
