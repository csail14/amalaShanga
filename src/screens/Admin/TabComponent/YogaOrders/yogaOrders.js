import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getAllYogaOrderWithProductDetails } from "../../../../utils/API/orderApi";
import { useMediaQuery } from "react-responsive";
import moment from "moment";
import Form from "react-bootstrap/Form";

const SubTitleContainer = styled.p`
  color: grey;
  font-weight: 700;
  font-size: 20px;
  text-align: left;
`;

const TextContainer = styled.p`
  color: grey;
  font-weight: 700;
  font-size: 15px;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
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

const YogaOrders = (props) => {
  const [searchName, setSearchName] = useState("");
  const isMobile = useMediaQuery({ query: "(max-width: 975px)" });

  const [yogaOrders, setYogaOrders] = useState([]);

  useEffect(() => {
    getAllYogaOrderWithProductDetails()
      .then((res) => {
        if (res && res.data && res.data.result) {
          setYogaOrders(res.data.result);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const orders =
    yogaOrders &&
    yogaOrders.sort(function (a, b) {
      return new Date(b.creation_date) - new Date(a.creation_date);
    });

  return (
    <InfoContainer isMobile={isMobile}>
      <SubTitleContainer>Les commandes de cours </SubTitleContainer>
      <TextContainer>
        Filter par nom de l'acheteur :{" "}
        <Form.Control
          type="text"
          style={{ width: "fit-content" }}
          value={searchName}
          onChange={(e) => {
            setSearchName(e.target.value);
          }}
        />
      </TextContainer>
      {orders &&
        orders.map((item) => {
          const threeMonthBefore = new Date(
            new Date().setMonth(new Date().getMonth() - 3)
          );
          const isActif = new Date(item.creation_date) > threeMonthBefore;
          if (
            item.firstName.toLowerCase().includes(searchName.toLowerCase()) ||
            item.lastName.toLowerCase().includes(searchName.toLowerCase())
          ) {
            return (
              <AllInfoDetailsContainer
                key={item.id}
                className="onHoverIsBorderGrey"
              >
                <InfoDetailsContainer>
                  <b>Nom du cours: </b>
                  {item.name}
                </InfoDetailsContainer>
                <InfoDetailsContainer>
                  <b>Nom de l'acheteur: </b> {item.firstName} {item.lastName}
                </InfoDetailsContainer>
                <InfoDetailsContainer>
                  <b>Date d'achat :</b>{" "}
                  {moment(item.creation_date).format("LL")}
                </InfoDetailsContainer>
                <InfoDetailsContainer>
                  <b>Actif :</b> {isActif ? "Oui" : "Non"}
                </InfoDetailsContainer>
                <InfoDetailsContainer>
                  <b>Prix:</b> {item.price_unit} €
                </InfoDetailsContainer>
                <InfoDetailsContainer></InfoDetailsContainer>
              </AllInfoDetailsContainer>
            );
          } else {
            return null;
          }
        })}
    </InfoContainer>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return { yogaClasses: store.yogaClasses };
};

export default connect(mapStateToProps, mapDispatchToProps)(YogaOrders);
