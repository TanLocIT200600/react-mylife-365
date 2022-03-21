import { DOMAIN_MY_LIFE } from '../Utils/systemSetting';
import { request } from './Api/request';

export const UserService = {
  login(userLogin: any) {
    return request({
      url: `${DOMAIN_MY_LIFE}/api/v1/auth/login`,
      method: 'POST',
      data: userLogin,
    })
  },
  register(userRegister: any) {
    return request({
      url: `${DOMAIN_MY_LIFE}/api/v1/auth/register`,
      method: 'POST',
      data: userRegister,
    })
  }
}