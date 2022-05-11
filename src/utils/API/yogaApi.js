import axios from "axios";
import { config } from "../../config";
const token = window.localStorage.getItem("AmalaToken");

export const addYoga = (body) => {
  return axios
    .post(config.api_url + "api/v1/yoga/add", body, {
      headers: { "x-access-token": token },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export const editYoga = (body, id) => {
  return axios
    .put(config.api_url + "api/v1/yoga/edit/" + id, body, {
      headers: { "x-access-token": token },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export const getYogaById = (id) => {
  return axios
    .get(config.api_url + "api/v1/yoga/" + id)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("erreur");
      return err;
    });
};

export const getAllYoga = () => {
  return axios
    .get(config.api_url + "api/v1/yoga/all", {
      headers: { "x-access-token": token },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("erreur");
      return err;
    });
};

export const deleteYogaById = (id) => {
  return axios
    .delete(config.api_url + "api/v1/yoga/delete/" + id, {
      headers: { "x-access-token": token },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("erreur");
      return err;
    });
};
