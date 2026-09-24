import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(80, "Name is too long.")
    .regex(/^[^\r\n]+$/, "Name cannot contain line breaks."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email.")
    .max(120, "Email is too long."),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters.")
    .max(2000, "Message is too long (max 2000 characters)."),
  website: z.string().optional(), // kolom jebakan untuk bot, harus kosong
});