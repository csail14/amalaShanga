import React, { useState, useEffect, useReducer } from "react";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Button from "react-bootstrap/Button";
import { createPaiement } from "../../utils/API/paiementApi";
import { connect } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {
  cleanBasket,
  deleteInBasket,
} from "../../actions/basket/basketActions";
import { FaTrash } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

const stripePromise = loadStripe(
  "pk_test_51KAeRqJOevlhOGCx8NPhobr1udMglQGjThDvVQQFIonDafUXwYgEsN5wFgOwVBOFnqzdVm9J5JEBJpKM2nS3HPDT00hCzf75Fi"
);

const MainContainer = styled.div`
  padding-top: 100px;
  padding-bottom: 40px;
  min-height: 96vh;
`;

const BasketContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: white;
  border-radius: 12px;
  margin: auto;
  margin-top: 30px;
  max-width: ${(props) => (props.isMobile ? "90%" : "50%")};
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
`;

const BasketTitle = styled.div`
  font-size: 20px;
  padding: 5px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const Paiement = (props) => {
  const [clientSecret, setClientSecret] = useState("");
  let history = useHistory();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    createPaiement(JSON.stringify({ items: [{ id: "xl-tshirt" }] })).then(
      (data) => {
        setClientSecret(data.data.clientSecret);
      }
    );
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  const calculTotalPrice = () => {
    let price = 0;
    props.basket &&
      props.basket.products &&
      props.basket.products.forEach((element) => {
        price = price + element.price;
      });
    return price;
  };

  const goToPay = () => {
    history.push("/paiement");
  };
  const isMobile = useMediaQuery({ query: "(max-width: 975px)" });

  return (
    <MainContainer>
      {/* <TitleContainer>Votre panier</TitleContainer> */}
      {props.basket && props.basket.products && (
        <BasketContainer isMobile={isMobile}>
          <BasketTitle>
            {props.basket.products.length === 0
              ? "Votre panier est vide"
              : `Vous avez ${props.basket.products.length} cours dans votre panier`}
          </BasketTitle>
          {props.basket.products.map((product) => {
            return (
              <Product>
                <p> {product.name}</p>
                <ButtonContainer>
                  {" "}
                  {product.price} €
                  <FaTrash
                    style={{ cursor: "pointer" }}
                    onClick={() => props.deleteInBasket(product)}
                  />
                </ButtonContainer>
              </Product>
            );
          })}
          {props.basket.products.length > 0 && (
            <>
              <Product style={{ fontWeight: 700, marginTop: 20 }}>
                <p> Total</p>
                <p> {calculTotalPrice()} €</p>
              </Product>

              <ButtonContainer>
                <Button variant="primary" onClick={goToPay}>
                  Finaliser l'achat
                </Button>
                <Button variant="outline-primary" onClick={props.cleanBasket}>
                  Vider le panier
                </Button>
              </ButtonContainer>
            </>
          )}
        </BasketContainer>
      )}
      <BasketContainer isMobile={isMobile}>
        <BasketTitle>Paiement par carte bancaire</BasketTitle>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </BasketContainer>
    </MainContainer>
  );
};

const mapDispatchToProps = { cleanBasket, deleteInBasket };

const mapStateToProps = (store) => {
  return { basket: store.basket };
};

export default connect(mapStateToProps, mapDispatchToProps)(Paiement);
