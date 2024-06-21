import axiosInstance from "../../config/axios";
import { toast } from "react-toastify";

export const artistList = () => {
  return async (dispatch) => {
    try {
      const {data}  = await axiosInstance.get("admin/list-artists");
      dispatch({
        type: "ARTIST_LIST",
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

export const getArtistById= (id) => {
    return async (dispatch) => {
      try {
        const {data}  = await axiosInstance.get(`admin/artists/${id}`);

  
        dispatch({
          type: "ARTIST_BY_ID",
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
  