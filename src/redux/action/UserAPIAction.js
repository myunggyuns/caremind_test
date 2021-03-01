import { REQUEST_USER_SIGN_IN } from "./UserAPIActionTypes";

export const getUser = userInfo => ({ type: REQUEST_USER_SIGN_IN, userInfo });
