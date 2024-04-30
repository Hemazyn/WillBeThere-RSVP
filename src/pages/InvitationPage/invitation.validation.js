import { z } from 'zod';

export const respondToEventValidationSchema = z
  .object({
    firstName: z
      .string()
      .min(2, { message: 'First Name must be at least 2 characters' })
      .or(z.literal('')),
    lastName: z
      .string()
      .min(2, { message: 'Last Name must be at least 2 characters' })
      .or(z.literal('')),
    email: z.string().email().or(z.literal('')),
    attending: z.boolean(),
    congratulatoryMessage: z.string().optional(),
    items: z.string().array(),
    guests: z.string().array(),
  })
  .superRefine(({ attending, guests, items }, ctx) => {
    if (!attending && (guests.length > 0 || items.length > 0))
      return ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Cannot specify guests or items if not attending',
        path: ['guests', 'items'],
      });
  });

export const updateRsvpValidationSchema = z
  .object({
    attending: z.boolean(),
    congratulatoryMessage: z.string().optional(),
    items: z.string().array(),
    guests: z.string().array(),
  })
  .superRefine(({ attending, guests, items }, ctx) => {
    if (!attending && (guests.length > 0 || items.length > 0))
      return ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Cannot specify guests or items if not attending',
        path: ['guests', 'items'],
      });
  });
