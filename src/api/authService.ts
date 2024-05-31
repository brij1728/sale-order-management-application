import { apiClient } from '../api';
import axios from 'axios';

interface ApiErrorResponse {
  message: string;
  code?: number;
}

interface User {
  username: string;
  email: string;
  password: string;
}

export const signup = async ({ username, email, password }: User) => {
  try {
    const response = await apiClient.post('/auth/signup', {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError<ApiErrorResponse>(error)) {
      if (error.response) {
        console.error(error.response.data.message);
        throw new Error(
          error.response.data.message || 'An error occurred during signup',
        );
      } else {
        throw new Error('Network Error during signup');
      }
    } else {
      console.error('An unexpected error occurred during signup');
      throw new Error('An unexpected error occurred during signup');
    }
  }
};

export const login = async (username: string, password: string) => {
  try {
    const response = await apiClient.post('/auth/login', {
      username,
      password,
    });
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError<ApiErrorResponse>(error)) {
      if (error.response) {
        console.error(error.response.data.message);
        throw new Error(error.response.data.message || 'Failed to login');
      } else {
        throw new Error('Network Error during login');
      }
    } else {
      console.error('An unexpected error occurred during login');
      throw new Error('An unexpected error occurred during login');
    }
  }
};

export const dummyLogin = async (username: string, password: string) => {
  const dummyUser = {
    username: 'admin',
    password: 'password123',
  };

  if (username === dummyUser.username && password === dummyUser.password) {
    localStorage.setItem('token', 'dummy-token');
    return { message: 'Login successful' };
  } else {
    throw new Error('Invalid username or password');
  }
};
