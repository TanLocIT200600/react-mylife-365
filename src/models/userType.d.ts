interface IUserDispatch {
  id: string,
  email: string,
  firstName: string,
  lastName: string,
  postCode: string,
  status: Active
}

type UserState = {
  user: IUserDispatch[]
}

type UserAction = {
  type: string,
  user: IUserDispatch
}

type DispatchType = (arg: UserAction) => UserAction