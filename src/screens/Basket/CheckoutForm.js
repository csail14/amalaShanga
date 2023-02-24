import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const MainContainer = styled.div`
  color: black;
`;

const Title = styled.div`
  color: black;
  padding-bottom: 20px;
`;

const ButtonContainer = styled.div`
  color: black;
  padding: 20px;
`;

export default function CheckoutForm(props) {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentIntent, setPaymentIntent] = useState(null);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = props.clientSecret;

    if (!clientSecret) {
      return;
    }
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      setPaymentIntent(paymentIntent);
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Paiement reussi !");
          break;
        case "processing":
          setMessage("Paiement en cours.");
          break;
        case "requires_payment_method":
          setMessage("");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "https://www.amalasangha.fr/paiement-succeed",
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsLoading(false);
  };

  return (
    <MainContainer>
      <Title>
        Montant à payer :{" "}
        {paymentIntent && (paymentIntent.amount / 100).toFixed(2)}€
      </Title>
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" />
        <ButtonContainer>
          <button disabled={isLoading || !stripe || !elements} id="submit">
            <span id="button-text">
              {isLoading ? (
                <div className="spinner" id="spinner">
                  Chargement ...
                </div>
              ) : (
                "Valider le paiement"
              )}
            </span>
          </button>
        </ButtonContainer>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </MainContainer>
  );
}
