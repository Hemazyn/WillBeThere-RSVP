import { z } from 'zod';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/;

export const signupValidationSchema = z.object({
  username: z
    .string()
    .min(2, { message: 'Username must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  first_name: z.string().min(2, {
    message: 'First name must be at least 2 characters long',
  }),
  last_name: z.string().min(2, {
    message: 'Last name must be at least 2 characters long',
  }),
  password: z.string().regex(passwordRegex, {
    message:
      'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number',
  }),
});
