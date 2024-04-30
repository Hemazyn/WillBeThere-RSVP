import { useMutation } from '@tanstack/react-query';
import axios from '../lib/axios';

const BASE_URL = import.meta.env.VITE_AUTH_SERVER_URL;

export const useLogin = () => {
  const { mutate, isPending, isSuccess, isError, error, data } = useMutation({
    mutationFn: async (data) => {
      let res = await axios.post('/login/', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
        },
        baseURL: BASE_URL,
      });

      localStorage.setItem('token', res.data.token);

      res = await axios.get('/profile', {
        headers: {
          'Content-Type': 'application/json',
        },
        baseURL: BASE_URL,
      });
      localStorage.setItem('user', JSON.stringify(res.data));

      return res.data;
    },
  });

  return { create: mutate, isPending, isSuccess, isError, error, data };
};

export const useSignup = () => {
  const { mutate, isPending, isSuccess, isError, error, data } = useMutation({
    mutationFn: async (data) => {
      const res = await axios.post('/register/', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
        },
        baseURL: BASE_URL,
      });

      return res.data;
    },
  });

  return { create: mutate, isPending, isSuccess, isError, error, data };
};

export const useLogout = () => {
  const { mutate, isPending, isSuccess, isError, error, data } = useMutation({
    mutationFn: async () => {
      await axios.post('/logout/', null, {
        baseURL: BASE_URL,
      });

      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('bookmarks');
      return;
    },
  });

  return { logout: mutate, isPending, isSuccess, isError, error, data };
};

export const useDeleteAccount = () => {
  const { mutate, isPending, isSuccess, isError, error, data } = useMutation({
    mutationFn: async () => {
      await axios.delete('/user/delete/', {
        headers: { 'Content-Type': 'application/json' },
        baseURL: BASE_URL,
      });

      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('bookmarks');
      return;
    },
  });

  return { deleteAccount: mutate, isPending, isSuccess, isError, error, data };
};
