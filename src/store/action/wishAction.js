import axiosInstance from "../../config/axios";
import { toast } from "react-toastify";

export const scheduleList = () => {
  return async (dispatch) => {
    try {
      const {data}  = await axiosInstance.get("admin/get-schedule");
      dispatch({
        type: "SCHEDULE_WISH",
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

export const getScheduleById= (id) => {
  return async (dispatch) => {
    try {
      const {data}  = await axiosInstance.get(`admin/schedule/${id}`);
   

      dispatch({
        type: "SCHEDULE_WISH_BY_ID",
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
