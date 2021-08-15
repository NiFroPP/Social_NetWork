import instance from "./api";

const followAPI = {
  deleteAPIUserIdFollow(user) {
    return instance.delete(`follow/${user}`).then(response => response.data);
  },

  postAPIUserIdFollow(user) {
    return instance.post(`follow/${user}`).then(response => response.data);
  },
};

export default followAPI;
