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

export const forgotPassword = (body) => {
  return axios
    .post(config.api_url + "api/v1/user/forgot", {
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

export const changePassword = (data, key_id) => {
  return axios
    .post(config.api_url + "api/v1/user/changePassword/" + key_id, data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};

export const setUser = (body, id) => {
  return axios
    .put(config.api_url + "api/v1/user/set/" + id, {
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

export const getAllUser = () => {
  return axios
    .get(config.api_url + "api/v1/user/all")
    .then((response) => {
      return response?.data?.result;
    })
    .catch((err) => {
      console.log("erreur");
      return err;
    });
};
