import axios from "axios";

const BASE_URL = "https://reqres.in/api";

export interface User {
  id?: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface NewUser {
  name: string;
  job: string;
}

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get(`${BASE_URL}/users?page=2`);
  return response.data.data; // Extract user data from the response
};

// Create a new user
export const createUser = async (user: NewUser): Promise<NewUser & { id: string; createdAt: string }> => {
  const response = await axios.post(`${BASE_URL}/users`, user);
  return response.data;
};

// Delete a user
export const deleteUser = async (id: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/users/${id}`);
};
