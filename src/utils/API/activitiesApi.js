import axios from "axios";
import { config } from "../../config";
const token = window.localStorage && window.localStorage.getItem("AmalaToken");

export const editActivities = (body, id) => {
  return axios
    .put(config.api_url + "api/v1/activities/edit/" + id, body, {
      headers: { "x-access-token": token },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export const getActivitiesById = (id) => {
  return axios
    .get(config.api_url + "api/v1/activities/" + id)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("erreur");
      return err;
    });
};
