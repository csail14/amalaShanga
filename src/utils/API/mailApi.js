import axios from "axios";
import { config } from "../../config";

export const subscribeStage = (body) => {
  return axios
    .post(config.api_url + "api/v1/subscribe/stage", body)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export const sendContact = (body) => {
  return axios
    .post(config.api_url + "api/v1/contact", body)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};
