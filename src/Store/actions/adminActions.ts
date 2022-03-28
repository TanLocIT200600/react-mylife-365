import { AdminServices } from "../../Services/adminServices"
import { GET_ALL_USERS, GET_ARCHIVE_USER } from "../constants/adminConstants";
import { createActions } from "../constants/createActions";


export const GetAllUsers = () => {
  return async (dispatch: any) => {
    try {
      const result = await AdminServices.getAllUsers();
      dispatch(createActions(GET_ALL_USERS, result.data.data))
    }
    catch (err) {
      console.log("err", err);
    }
  }
}

export const GetArchiveUsers = (id: string) => {
  return async (dispatch: any) => {
    try {
      const result = await AdminServices.getArchiveUsers(id);
      // dispatch(createActions(GET_ARCHIVE_USER, result.data.data))
      console.log(result.data);
      if (result.data.statusCode === 200) {
        alert(`Archive successfully`)
      }

    }
    catch (err) {
      console.log("errGetArchiver", err);

    }
  }
}