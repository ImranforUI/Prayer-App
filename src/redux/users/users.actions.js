import {
    FETCH_PRAYER_FAILURE,
    FETCH_PRAYER_REQUEST, FETCH_PRAYER_SUCCESS,
    REGISTER_USER_FAILURE,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS
} from "./users.actionTypes";
import Axios from "axios";

let serverUrl = `http://13.233.4.38:5000`;
// let serverUrl = `http://localhost:5000`;

// Register User
let registerUser = (user) => {
  return async (dispatch) => {
    let config = {
      headers : {
        'Content-Type' : 'application/json'
      }
    } 
        try {
            dispatch({ type : REGISTER_USER_REQUEST});
            let dataUrl = `${serverUrl}/users/register`;
            let response = await Axios.post(dataUrl , user, config);
            dispatch({ type : REGISTER_USER_SUCCESS , payload : response.data});

        }
        catch (error) {
            console.error(error);
            dispatch({ type : REGISTER_USER_FAILURE , payload : error});
        }
  };
};

// Get All user data
let getAllData = () => {
  return async (dispatch) => {
      try {
          dispatch({type : FETCH_PRAYER_REQUEST});
          let response = await Axios.get(`${serverUrl}/users/`);
          dispatch({type : FETCH_PRAYER_SUCCESS , payload : response.data});
      }
      catch (error) {
        console.error(error);
        dispatch({type : FETCH_PRAYER_FAILURE , payload : error});
      }
  }
};

export {registerUser, getAllData};