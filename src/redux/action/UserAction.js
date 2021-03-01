import {
  ENTER_EMAIL,
  ENTER_PASSWORD,
  CLEAR_INPUT_VALUE,
} from "./UserActionTypes";

export const enterEmail = email => ({ type: ENTER_EMAIL, email });
export const enterPassword = password => ({ type: ENTER_PASSWORD, password });
export const clearInputValue = () => ({ type: CLEAR_INPUT_VALUE });
