import axios from "axios";
import { config } from "../../config";

export const addYoga = (body) => {
  return axios
    .post(config.api_url + "api/v1/yoga/add", body)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export const editYoga = (body, id) => {
  return axios
    .put(config.api_url + "api/v1/yoga/edit/" + id, body)
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
    .get(config.api_url + "api/v1/yoga/all")
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
    .delete(config.api_url + "api/v1/yoga/delete/" + id)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("erreur");
      return err;
    });
};
