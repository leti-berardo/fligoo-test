import axios from "axios";

export default class apiCall {
  getUsers(page) {
    return axios.get(`https://reqres.in/api/users?page=${page}`);
  }
}
