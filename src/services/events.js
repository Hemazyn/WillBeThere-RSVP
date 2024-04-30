import { useMutation, useQuery } from '@tanstack/react-query';
import axios from '../lib/axios';
import { queryClient } from '../lib/react-query';

export const useGetEvents = () => {
  const { isSuccess, isPending, isError, data, error } = useQuery({
    queryFn: async () => {
      const res = await axios.get('events');
      return res.data;
    },
    queryKey: ['events'],
  });

  return { isSuccess, isError, isPending, data, error };
};

export const useGetEvent = (id) => {
  const { isSuccess, isPending, isError, data, error } = useQuery({
    queryFn: async () => {
      const res = await axios.get(`events/id/${id}`);
      return res.data;
    },
    queryKey: [`event/${id}`],
  });

  return { isSuccess, isError, isPending, data, error };
};

export const useGetEventsForUser = (id) => {
  const { isSuccess, isPending, isError, data, error } = useQuery({
    queryFn: async () => {
      const res = await axios.get(`events/user`);
      return res.data.data;
    },
    queryKey: [`event/${id}`],
  });

  return { isSuccess, isError, isPending, data, error };
};

export const useCreateEvent = () => {
  const { mutate, isPending, isSuccess, isError, error, data } = useMutation({
    mutationFn: async (values) => {
      const { image, ...data } = values;
      const formData = new FormData();
      formData.append('image', image);

      const uploadResponse = await axios.post('uploads/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      data.image = uploadResponse.data.data.publicUrl;

      const res = await axios.post('events', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return res.data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
    },
  });

  return { create: mutate, isPending, isSuccess, isError, error, data };
};

export const useUpdateEvent = (id) => {
  const { mutate, isPending, isSuccess, isError, error, data } = useMutation({
    mutationFn: async (values) => {
      const { image, ...data } = values;
      const formData = new FormData();
      formData.append('image', image);

      if (image instanceof File) {
        const uploadResponse = await axios.post('uploads/image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        axios.delete(`uploads/${data.previousImageUrl}`).catch((err) => {
          console.error('Unable to delete previous image', err);
        });

        data.image = uploadResponse.data.publicUrl;
      }

      const res = await axios.patch(`events/${id}`, JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return res.data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`event/${id}`] });
    },
  });

  return { patch: mutate, isPending, isSuccess, isError, error, data };
};

export const useCancelEvent = (id) => {
  const { mutate, isPending, isSuccess, isError, error, data } = useMutation({
    mutationFn: async () => {
      const res = await axios.patch(`events/cancel/${id}`);

      return res.data.data;
    },
  });

  return { cancelEvent: mutate, isPending, isSuccess, isError, error, data };
};
