import { z } from 'zod';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/;

export const loginValidationSchema = z.object({
  username: z
    .string()
    .min(2, { message: 'Username must be at least 2 characters' }),
  password: z.string().regex(passwordRegex, {
    message:
      'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number',
  }),
});
