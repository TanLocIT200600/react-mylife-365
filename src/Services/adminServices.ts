import { DOMAIN_MY_LIFE } from './../Utils/systemSetting';
import { request } from './Api/request';


export const AdminServices = {
  getAllUsers() {
    return request({
      url: `${DOMAIN_MY_LIFE}/api/v1/users`,
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
  }
}