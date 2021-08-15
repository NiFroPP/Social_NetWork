import instance from "./api";

const usersAPI = {
  getAPIUsers(page = 1, limit = 100) {
    return instance.get(`users?page=${page}&count=${limit}`).then(response => response.data);
  },
};

export default usersAPI;
