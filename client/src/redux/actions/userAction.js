import axios from "axios";
import {
  LoadUserRequest,
  LoadUserSuccess,

  LoadUserFail,
} from "../reducers/userReducer";



export const userAction = () => async (dispatch) => {
  try {
    dispatch(LoadUserRequest());
     const { data } = await axios.get("https://webearn-dsk8.vercel.app/api/v2/user/get-user", 
    {
      withCredentials: true,
    }
    );
    
    dispatch(LoadUserSuccess(data));
  } 
  
  catch (err) {
    dispatch(
      LoadUserFail(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
      )
    );
  }
};


