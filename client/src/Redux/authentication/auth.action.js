import {
  AUTH_LOG_IN_SUCCESS,
  AUTH_LOG_IN_ERROR,
  AUTH_LOG_OUT,
} from "./auth.types";
import axios from "axios";
import Cookies from "js-cookie";
import { error, success } from "../../Utils/notification";
const BASE_URL = process.env.REACT_APP_BACKEND_URL;



export const loginAPI = (data, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/login`, data);

    if (response.data.status === "Failed") {
      error(response.data.message);
      return;
    }

    const user = response.data.message?.user;
    const token = response.data.message?.token;

    // Validate the response structure
    if (!user || !user._id || !token) {
      throw new Error("Invalid login response: Missing user ID or token");
    }

    Cookies.set("jwttoken", token, {
      expires: new Date(new Date().getTime() + 60 * 60 * 1000),
    });
    Cookies.set("userid", user._id, {
      expires: new Date(new Date().getTime() + 60 * 60 * 1000),
    });
    Cookies.set("usergender", user.gender, {
      expires: new Date(new Date().getTime() + 60 * 60 * 1000),
    });

    dispatch({
      type: AUTH_LOG_IN_SUCCESS,
      payload: response.data,
    });

    success("Sign In successfully");
    navigate("/");

  } catch (error) {
    dispatch({ type: AUTH_LOG_IN_ERROR });
    console.error("Login failed:", error.message);
  }
};


export const logoutAPI = () => ({ type: AUTH_LOG_OUT });

