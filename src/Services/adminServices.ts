import { DOMAIN_MY_LIFE } from './../Utils/systemSetting';
import { request } from './Api/request';


const token = localStorage.getItem('token');

export const AdminServices = {
  getAllUsers() {
    return request({
      url: `${DOMAIN_MY_LIFE}/api/v1/users`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
  },

  getArchiveUsers(id: string) {
    return request({
      url: `${DOMAIN_MY_LIFE}/api/v1/users/${id}/archive`,
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
}