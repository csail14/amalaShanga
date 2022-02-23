import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { createPaiement } from "../../utils/API/paiementApi";
import CheckoutForm from "./CheckoutForm";
import "../../App.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  "pk_test_51KAeRqJOevlhOGCx8NPhobr1udMglQGjThDvVQQFIonDafUXwYgEsN5wFgOwVBOFnqzdVm9J5JEBJpKM2nS3HPDT00hCzf75Fi"
);

export default function App() {
  const [clientSecret, setClientSecret] = useState("");
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
  console.log("clientSecret", clientSecret);
  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
