import { GET_ALL_USERS, GET_ARCHIVE_USER } from "../constants/adminConstants"
import { listUser } from '../../models/getUser';

const initialState = {
  listUser: {
    users: Array<listUser>()
  },
  // archiveUser: {
  //   status: ''
  // }
}

export const adminReducers = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case GET_ALL_USERS:
      state.listUser = payload;
      return { ...state };
    // case GET_ARCHIVE_USER:
    //   state.archiveUser.status = payload;
    //   return { ...state };
    default:
      return state;
  }
}