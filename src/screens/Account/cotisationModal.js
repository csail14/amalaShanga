import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import styled from "styled-components";
import { createPaiement } from "../../utils/API/paiementApi";
import { useMediaQuery } from "react-responsive";
import CheckoutForm from "../Basket/CheckoutForm";
import { Link } from "react-router-dom";

const stripePromise = loadStripe(process.env.REACT_APP_ENV_STIPE_KEY);

const BasketContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: white;
  border-radius: 12px;
  margin: auto;
  margin-top: 30px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
`;

const BasketTitle = styled.div`
  font-size: 20px;
  padding: 5px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const ModifyPersonalInfoModal = (props) => {
  const [clientSecret, setClientSecret] = useState("");
  const isMobile = useMediaQuery({ query: "(max-width: 975px)" });
  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  useEffect(() => {
    const items = [{ id: 0 }];

    createPaiement({
      items,
      user_id: props.user && props.user.infos && props.user.infos.id,
    }).then((data) => {
      setClientSecret(data.data && data.data.clientSecret);
    });
  }, []);

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Devenir Membre</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          En continuant ce paiement vous acceptez les{" "}
          <Link to="/cgv">
            <strong>Conditions générales de vente</strong>
          </Link>
        </p>
        <BasketContainer isMobile={isMobile}>
          <BasketTitle>Paiement par carte bancaire</BasketTitle>
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm clientSecret={clientSecret} />
            </Elements>
          )}
        </BasketContainer>
      </Modal.Body>
      <Modal.Footer>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModifyPersonalInfoModal);
