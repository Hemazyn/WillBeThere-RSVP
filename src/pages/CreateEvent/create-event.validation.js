import { z } from 'zod';

export const eventCreationValidationSchema = z
  .object({
    name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
    description: z.string().min(3, {
      message: 'Description must be at least 3 characters',
    }),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    type: z.string().min(2, {
      message: 'Type must be at least 3 characters',
    }),
    items: z.string().array(),
    isPublic: z.boolean(),
    location: z.string(),
    locationReleaseDate: z.coerce.date().optional(),
    maxGuestsPerAttendee: z.number().optional(),
    maxGuests: z.number().min(1).optional(),
  })
  .superRefine(({ startDate, endDate, locationReleaseDate, duration }, ctx) => {
    if (duration) {
      if (duration.days === 0 && duration.hours === 0 && duration.minutes === 0)
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Duration must be greater than 0',
          path: ['duration'],
        });
      if (duration.hours > 24)
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Hours in duration must be less than 24 hours',
          path: ['duration'],
        });
      if (duration.minutes > 60)
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Minutes in duration must be less than 60 minutes',
          path: ['duration'],
        });
    }

    if (new Date(startDate).getTime() <= new Date().getTime())
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Event date must be in the future',
        path: ['startDate'],
      });

    if (endDate) {
      if (new Date(startDate).getTime() > new Date(endDate).getTime())
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'End date must be after event date',
          path: ['endDate'],
        });
    }

    if (locationReleaseDate) {
      if (
        new Date(startDate).getTime() < new Date(locationReleaseDate).getTime()
      )
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Location release date must be before event date',
          path: ['locationReleaseDate'],
        });

      if (new Date(locationReleaseDate).getTime() <= new Date().getTime())
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Location release date must be in the future',
          path: ['locationReleaseDate'],
        });
    }
  });

export const updateEventValidationSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'Name must be at least 3 characters' })
      .optional(),
    description: z
      .string()
      .min(3, {
        message: 'Description must be at least 3 characters',
      })
      .optional(),
    date: z.coerce.date().optional(),
    duration: z
      .object({
        days: z.number(),
        hours: z.number(),
        minutes: z.number(),
      })
      .optional(),
    type: z
      .string()
      .min(2, {
        message: 'Type must be at least 3 characters',
      })
      .optional(),
    items: z.string().array().optional(),
    visibility: z.literal('PUBLIC').or(z.literal('PRIVATE')).optional(),
    location: z.string().optional(),
    image: z.string().url({ message: 'Invalid image URL' }).optional(),
    maxGuestsPerAttendee: z.number().optional(),
    maxGuests: z.number().optional(),
  })
  .superRefine(({ date, duration }, ctx) => {
    if (duration) {
      if (duration.days === 0 && duration.hours === 0 && duration.minutes === 0)
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Duration must be greater than 0',
          path: ['duration'],
        });
      if (duration.hours > 24)
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Hours in duration must be less than 24 hours',
          path: ['duration'],
        });
      if (duration.minutes > 60)
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Minutes in duration must be less than 60 minutes',
          path: ['duration'],
        });
    }

    if (date) {
      if (new Date(date).getTime() <= new Date().getTime())
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Event date must be in the future',
          path: ['date'],
        });
    }
  });
