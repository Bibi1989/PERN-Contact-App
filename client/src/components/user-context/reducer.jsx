import { REGISTER, USER_ERROR, LOGIN } from "./types";
import auth from '../privateRoute/auth'

export const reducer = (state, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        users: action.payload
      };
    case LOGIN:
      // auth.authenticate
      return {
        ...state,
        status: action.payload
      };
    case USER_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
