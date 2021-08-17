import instance from "./api";

const authAPI = {
  getAPIAuthMe() {
    return instance.get(`auth/me`).then(response => response.data);
  },
};

export default authAPI;
