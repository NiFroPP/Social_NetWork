import instance from "./api";

const profileAPI = {
  getAPIUserIDProfile(userId) {
    return instance.get(`profile/${userId}`).then(response => response.data);
  },
};

export default profileAPI;
