import axios from 'axios';

axios.defaults.baseURL = 'https://643e7f53c72fda4a0bf83652.mockapi.io';

export const addUser = async values => {
  const response = await axios.post('/users', values);
  return response.data;
};

export const getUsers = async () => {
  const response = await axios.get(`/users`);
  return response.data;
};

export const deleteUser = async id => {
  const response = await axios.delete(`/users/${id}`);
  return response.data;
};

export const updateUser = async user => {
  const response = await axios.put(`/users/${user.id}`, user);
  return response.data;
};
