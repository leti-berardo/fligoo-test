import axios from "axios";

export default class apiCall {
  getUsers(page) {
    return axios.get(`https://reqres.in/api/users?page=${page}`);
  }

  updateUser(parameters) {
    return axios.put(`https://reqres.in/api/users/${parameters.id}`, {
      params: { ...parameters },
    });
  }
}
