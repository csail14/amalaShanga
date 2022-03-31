import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getAllYogaOrder } from "../../../../utils/API/orderApi";
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

const YogaOrders = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 975px)" });

  const [yogaOrders, setYogaOrders] = useState([]);

  useEffect(() => {
    getAllYogaOrder()
      .then((res) => {
        if (res && res.data && res.data.result) {
          setYogaOrders(res.data.result);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(yogaOrders);
  return (
    <InfoContainer isMobile={isMobile}>
      <SubTitleContainer>Les commandes de cours tt </SubTitleContainer>
      {yogaOrders &&
        yogaOrders.map((item, index) => {
          return (
            <AllInfoDetailsContainer
              key={index}
              className="onHoverIsBorderGrey"
            >
              <InfoDetailsContainer>
                <b>Image:</b>{" "}
              </InfoDetailsContainer>
              <InfoDetailsContainer>
                <b>Nom:</b>
                Hello
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
              <InfoDetailsContainer></InfoDetailsContainer>
            </AllInfoDetailsContainer>
          );
        })}
    </InfoContainer>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return { yogaClasses: store.yogaClasses };
};

export default connect(mapStateToProps, mapDispatchToProps)(YogaOrders);
