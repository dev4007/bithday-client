import axiosInstance from "../../config/axios";
import { toast } from "react-toastify";

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.post("auth/login", {
        email,
        password,
      });
      localStorage.setItem("userData", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
      localStorage.setItem("refreshToken", data?.refreshToken);
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

export const logout = () => {
  return async (dispatch) => {
    try {
      // Example: clear localStorage item named 'userData'
      localStorage.removeItem("userData");

      dispatch({
        type: "LOGOUT",
      });

      return true;
    } catch (error) {
      console.error("Error logging out:", error);
      return false;
    }
  };
};
