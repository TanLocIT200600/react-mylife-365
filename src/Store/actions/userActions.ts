import { UserService } from "../../Services/userServices";
import { USER_SIGNIN, USER_SIGNUP } from "../constants/userConstant";
import { createActions } from "../constants/createActions";
import { USER_LOGIN } from "../../Utils/systemSetting";
import { DISPLAY_LOADING, HIDE_LOADING } from "../constants/loadingConstants";

export const SignInAction = (userLogin: {}, callback: any) => {
  return async (dispatch: any) => {
    try {
      await dispatch(createActions(DISPLAY_LOADING, {}))
      const result = await UserService.login(userLogin);
      localStorage.setItem(USER_LOGIN, JSON.stringify(result.data.data));
      localStorage.setItem("token", result.data.data.jwt.token);
      dispatch(createActions(USER_SIGNIN, result.data.data.user));
      callback();
      setTimeout(() => {
        dispatch(createActions(HIDE_LOADING, {}))
      }, 3000)
    }
    catch (err) {
      dispatch(createActions(HIDE_LOADING, {}))
      console.log("err", err);
    }
  }
}

export const RegisterActions = (userNew: {}, callback: any) => {
  return async (dispatch: any) => {
    try {
      const result = await UserService.register(userNew);
      await dispatch(createActions(USER_SIGNUP, result.data.data.user));
      callback();
    }
    catch (err) {
      console.log("errRegister", err);

    }
  }

}