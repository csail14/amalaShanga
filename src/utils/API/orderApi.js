import axios from "axios";
import { config } from "../../config";
const token = window.localStorage.getItem("AmalaToken");

export const getOrderByClient = (id) => {
  return axios
    .get(config.api_url + "api/v1/orderDetails/" + id, {
      headers: { "x-access-token": token },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export const getAllYogaOrder = () => {
  return axios
    .get(config.api_url + "api/v1/order/all", {
      headers: { "x-access-token": token },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export const getAllYogaOrderWithProductDetails = () => {
  return axios
    .get(config.api_url + "api/v1/orderDetails/all/product-details", {
      headers: { "x-access-token": token },
    })
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
        product_id,
      {
        headers: { "x-access-token": token },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};
