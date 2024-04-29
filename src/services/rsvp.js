import { useMutation } from '@tanstack/react-query';
import axios from '../api/axios';
import { queryClient } from '../react-query/react-query';

export const usePatchEvent = () => {
  const { mutate, isPending, isSuccess, isError, error, data } = useMutation({
    mutationFn: async ({ values, eventId }) => {
      const { media, ...data } = values;
      let mediaRes = null;

      const formData = new FormData();
      media.forEach((file) => formData.append('media', file));

      if (media[0] instanceof File) {
        console.log('is file.');
        mediaRes = await axios.post('uploads/medias', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        data.media = mediaRes.data;
      } else {
        console.log("isn't file");
        data.media = media;
      }

      const res = axios.patch(`events/${eventId}`, JSON.stringify(data), {
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

  return { patch: mutate, isPending, isSuccess, isError, error, data };
};
