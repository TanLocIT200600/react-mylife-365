import axios from "axios";
import { TOKEN_MY_LIFE } from "../../Utils/systemSetting"


export const request = ({ url, data, params, method }: any) => {

  const token = localStorage.getItem('token');
  const variables = {
    url, data, params, method,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      TokenMyLife: TOKEN_MY_LIFE,
      Authorization: 'Bearer ' + token,
    }
  }
  if (token) {
    variables.headers = {
      ...variables.headers,
      Authorization: 'Bearer ' + token,
    }
  }
  return axios(variables);
}