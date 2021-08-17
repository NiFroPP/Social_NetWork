import instance from "./api";

const usersAPI = {
  getAPIUsers(page = 1, limit = 100) {
    return instance.get(`users?page=${page}&count=${limit}`).then(response => response.data);
  },
  unfollowAPIUser(user) {
    return instance.delete(`follow/${user}`).then(response => response.data);
  },

  followAPIUser(user) {
    return instance.post(`follow/${user}`).then(response => response.data);
  },
};

export default usersAPI;
