import { combineReducers } from "redux";
import { userSignin } from "./UserSigninReducer";

export const rootReducer = combineReducers({ userSignin });
