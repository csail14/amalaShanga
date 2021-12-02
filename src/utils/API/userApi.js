import axios from "axios";
import { config } from "../../config";

const headers = {
  "Content-Type": "application/json",
  Authorization: "Access-Control-Allow-Origin",
};
export const addUser = (body) => {
  return axios
    .post(config.api_url + "api/v1/user/add", body)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export const setUser = (body) => {
  return axios
    .post(config.api_url + "api/", { body: body, headers: headers })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export const loginUser = (data) => {
  return axios
    .post(config.api_url + "api/v1/user/login", data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("erreur");
      return err;
    });
};

export const getUserById = (id) => {
  return axios
    .get(config.api_url + "api/v1/user/" + id)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("erreur");
      return err;
    });
};
