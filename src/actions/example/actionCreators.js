import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  CREATE_USER,
  USER_CHANGED,
  LOGIN_USER
} from './actionTypes';
import Axios from 'axios';

export const emailChanged = (text) => {
  return {
      type: EMAIL_CHANGED,
      payload: text

  };
};

export const passwordChanged = (text) => {
  return {
      type: PASSWORD_CHANGED,
      payload: text
  }
};
export const userChanged = (text) => {
return {
    type: USER_CHANGED,
    payload: text
}
};



export const createUser = ({username, email, password }) => {
  return (dispatch) => {
      dispatch({ type: CREATE_USER });
      Axios.post('http://apitest.partsplusmore.com/api/users',{user: {
        "username": username,
        "password": password,
        "password_confirmation":password,
        "email": email,
        "first_name": "John",
        "last_name": "doe"
    } });

  };
};
export const loginUser = ({ email, password }) => {
  return (dispatch) => {
      dispatch({ type: LOGIN_USER });
      


  };
};

