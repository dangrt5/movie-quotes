import types from "./types";
import axios from "axios";

export const signUp = (userInfo) => {
  return async (dispatch) => {
    try {
      const resp = await axios.post("http://api.reactprototypes.com/signup", userInfo);
      console.log("Sign Up Response", resp);

      dispatch({
        type: types.SIGN_UP
      });
    } catch(error) {
        dispatch({
          type: types.SIGN_UP_ERROR,
          error: "Error creating account"
        })
    }
  }
}

export const signIn = userInfo => async dispatch => {
  try {
    const resp = await axios.post("http://api.reactprototypes.com/signin", userInfo);
    console.log("Sign In Response:", resp);

    localStorage.setItem("token", resp.data.token)

    dispatch({
      type: types.SIGN_IN
    });
  } catch(error) {
    // err.response.data
      dispatch({
        type: types.SIGN_IN_ERROR,
        error: "Invalid Email and/or Password"
      })
  }
}

export const signOut = () => {
  localStorage.removeItem("token");
  return {
    type: types.SIGN_OUT
  }
}

export const getMovieQuote = () => async dispatch => {
  try {

    const axiosConfig = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    }

    const resp = await axios.get("http://api.reactprototypes.com", axiosConfig);

    dispatch({
      type: types.GET_MOVIE_QUOTE,
      quote: resp.data.message
    })
  } catch(error) {
      console.log("Movie Quote Error", error.message);
  }
}
