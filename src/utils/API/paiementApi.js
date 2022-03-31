import axios from "axios";
import { config } from "../../config";

const headers = {
  "Content-Type": "application/json",
  Authorization: "Access-Control-Allow-Origin",
  "Access-Control-Allow-Origin": "*",
};
export const createPaiement = (body) => {
  return axios
    .post(config.api_url + "create-payment-intent", {
      body: body,
      headers: headers,
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};
