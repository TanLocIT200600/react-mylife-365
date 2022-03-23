import { AdminServices } from "../../Services/adminServices"
import { GET_ALL_USERS } from "../constants/adminConstants";
import { createActions } from "../constants/createActions";


export const GetAllUsers = () => {
  return async (dispatch: any) => {
    try {
      const result = await AdminServices.getAllUsers();
      dispatch(createActions(GET_ALL_USERS, result.data))
      console.log(result);
    }
    catch (err) {
      console.log("err", err);
    }
  }
}