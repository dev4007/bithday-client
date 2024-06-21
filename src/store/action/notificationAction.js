import axiosInstance from "../../config/axios";
import { toast } from "react-toastify";

export const notificationList = () => {
  return async (dispatch) => {
    try {
      const {data}  = await axiosInstance.get("admin/list-notifications");
      dispatch({
        type: "NOTIFICATION_LIST",
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

export const getNotificationById= (id) => {
    return async (dispatch) => {
      try {
        const {data}  = await axiosInstance.get(`admin/notification/${id}`);
  
        dispatch({
          type: "NOTIFICATION_BY_ID",
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
  