import * as z from 'zod';

const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

export const loginSchema = z.object({
  email: z
    .string()
    .email()
    .regex(/@mail\.uc\.edu$/, 'Must be a valid UC email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z
    .string()
    .email()
    .regex(/@mail\.uc\.edu$/, 'Must be a valid UC email address'),
  phone: z.string().regex(phoneRegex, 'Invalid phone number format'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  department: z.string().min(2, 'Department is required'),
});