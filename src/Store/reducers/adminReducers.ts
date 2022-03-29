import { GET_ALL_USERS } from "../constants/adminConstants"
import { listUser } from '../../models/getUser';

const initialState = {
  listUser: {
    users: Array<listUser>()
  },
}

export const adminReducers = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case GET_ALL_USERS:
      state.listUser = payload;
      return { ...state };
    default:
      return state;
  }
}