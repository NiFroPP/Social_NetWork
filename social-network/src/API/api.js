const URL = "https://social-network.samuraijs.com/api/1.0/users";

export const getAPIUsers = (page, limit) => {
  return `${URL}?page=${page}&count=${limit}`;
};
