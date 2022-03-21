import { USER_LOGIN } from "../../Utils/systemSetting";
import { USER_SIGNIN, USER_SIGNUP } from "../constants/userConstant";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  // user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
  userLogin: {},
  userNew: {},
}
export const userReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case USER_SIGNIN:
      state.userLogin = payload;
      return { ...state };
    case USER_SIGNUP:
      state.userNew = payload;
      return { ...state };

    default:
      return state;
  }
}
