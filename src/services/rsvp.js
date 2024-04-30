import { useMutation } from '@tanstack/react-query';
import axios from '../lib/axios';

export const useCreateRsvp = () => {
  const { isSuccess, isPending, isError, error, data, mutate } = useMutation({
    mutationFn: async (data) => {
      const res = await axios.post(`/rsvps`, JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return res.data.data;
    },
  });

  return { create: mutate, isSuccess, isError, isPending, data, error };
};

export const useUpdateRsvp = () => {
  const { isSuccess, isPending, isError, error, data, mutate } = useMutation({
    mutationFn: async (data) => {
      const res = await axios.patch(`/rsvps`, JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return res.data.data;
    },
  });

  return { create: mutate, isSuccess, isError, isPending, data, error };
};

export const useGetRsvpsForEvent = (id) => {
  const { isSuccess, isPending, isError, data, error, mutate } = useMutation({
    mutationFn: async () => {
      const res = await axios.get(`rsvps/event/${id}`);
      return res.data;
    },
    queryKey: [`rsvp/${id}`],
  });

  return { fetchRsvps: mutate, isSuccess, isError, isPending, data, error };
};

export const useUploadEventImages = (id) => {
  const { mutate, isPending, isSuccess, isError, error, data } = useMutation({
    mutationFn: async (images) => {
      const formData = new FormData();
      for (const image of images) formData.append('images', image);
      // images.forEach((image) => formData.append('images', image));

      const uploadResponse = await axios.post('uploads/images', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const res = await axios.post(
        'rsvps/images',
        JSON.stringify({ eventId: id, uploads: uploadResponse.data.data }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      return res.data.data;
    },
  });

  return { uploadImages: mutate, isPending, isSuccess, isError, error, data };
};
