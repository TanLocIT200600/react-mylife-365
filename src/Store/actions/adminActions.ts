
import { AdminServices } from "../../Services/adminServices"
import { GET_ALL_USERS } from "../constants/adminConstants";
import { createActions } from "../constants/createActions";
import { IAddUser } from '../../models/addUser';


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
  return async () => {
    try {
      const result = await AdminServices.getArchiveUsers(id);
      if (result.data.statusCode === 200) {
        alert(`Archive user successfully`)
      }
    }
    catch (err) {
      console.log("errGetArchiver", err);
    }
  }
}

export const GetUnarchiveUsers = (id: string) => {
  return async () => {
    try {
      const result = await AdminServices.getUnarchiveUsers(id);
      if (result.data.statusCode === 200) {
        alert("Unarchive user successfully");
      }
    }
    catch (err) {
      console.log("errGetUnarchiveUsers", err);
    }
  }
}

export const GetAddUser = (userNew: IAddUser) => {
  return async () => {
    try {
      const result = await AdminServices.getAddUser(userNew);
      if (result.data.statusCode === 200) {
        alert("Add user successfully");
      }
    }
    catch (err) {
      console.log("errGetAddUser", err);
    }
  }
}