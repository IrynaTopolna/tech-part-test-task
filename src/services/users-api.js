const BASE_URL = "https://643444ee1c5ed06c95935b39.mockapi.io";

export const getUsers = () => {
  const response = fetch(`${BASE_URL}/users`);
  return response;
};
