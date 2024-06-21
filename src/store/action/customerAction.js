import axiosInstance from "../../config/axios";
import { toast } from "react-toastify";

export const customerList = () => {
  return async (dispatch) => {
    try {
      const {data}  = await axiosInstance.get("admin/list-customers");
      dispatch({
        type: "CUSTOMER_LIST",
        payload: data,
      });
      return true;
    } catch (error) {
      toast.error(
        (error.response?.data &&
          error.response?.data?.error &&
          error.response?.data?.error?.message) ||
          "Something went wrong"
      );
      return false;
    }
  };
};

export const getCustomerById= (id) => {
    return async (dispatch) => {
      try {
        const {data}  = await axiosInstance.get(`admin/customers/${id}`);

  
        dispatch({
          type: "CUSTOMER_BY_ID",
          payload: data,
        });
        return true;
      } catch (error) {
        toast.error(
          (error.response?.data &&
            error.response?.data?.error &&
            error.response?.data?.error?.message) ||
            "Something went wrong"
        );
        return false;
      }
    };
  };
  