import {
  ENTER_EMAIL,
  ENTER_PASSWORD,
  CLEAR_INPUT_VALUE,
} from "../action/UserActionTypes";
import { REQUEST_USER_SIGN_IN } from "../action/UserAPIActionTypes";

export const initialState = {
  isLoading: false,
  isSignIn: false,
  email: "",
  password: "",
  error: null,
  name: "",
};

export const userSignin = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_INPUT_VALUE:
      return initialState;

    case ENTER_EMAIL:
      return { ...state, email: action.email };

    case ENTER_PASSWORD:
      return { ...state, password: action.password };

    case REQUEST_USER_SIGN_IN:
      if (!action.userInfo) {
        return state;
      }
      return {
        ...state,
        isLoading: true,
        isSignIn: action.userInfo.status,
        name: action.userInfo.name,
      };

    default:
      return state;
  }
};
