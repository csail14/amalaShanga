import axios from "axios";
import { config } from "../../config";

export const getOrderByClient = (id) => {
  return axios
    .get(config.api_url + "api/v1/orderDetails/" + id)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export const getAllYogaOrder = () => {
  return axios
    .get(config.api_url + "api/v1/order/all")
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export const getOrderByClientByProduct = (user_id, product_id) => {
  return axios
    .get(
      config.api_url +
        "api/v1/orderDetails/checkOrder/" +
        user_id +
        "/" +
        product_id
    )
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};
