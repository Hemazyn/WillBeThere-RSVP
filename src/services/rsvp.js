import { useMutation } from '@tanstack/react-query';
import axios from '../lib/axios';

export const useCreateRsvp = () => {
  const { isSuccess, isPending, isError, error, data, mutate } = useMutation({
    mutationFn: async ({ eventId, data }) => {
      const res = await axios.post(`events/${eventId}`, JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return res.data.data;
    },
  });

  return { create: mutate, isSuccess, isPending, isError, error, data };
};

export const useGetRsvpsForEvent = (id) => {
  const { isSuccess, isPending, isError, data, error, mutate } = useMutation({
    mutationFn: async () => {
      const res = await axios.get(`events/id/${id}`);
      return res.data;
    },
    queryKey: [`event/${id}`],
  });

  return { fetchRsvps: mutate, isSuccess, isError, isPending, data, error };
};
