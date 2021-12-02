import axios from "axios";
import { config } from "../../config";

export const getStart = async () => {
  return axios
    .get(config.api_url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};
