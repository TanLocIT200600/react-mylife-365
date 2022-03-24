import { GET_ALL_USERS } from "../constants/adminConstants"

const initialState = {
  listUser: {
    users:[]
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