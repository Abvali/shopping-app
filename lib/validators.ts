import { email, z } from "zod";

export const insertProductSchema = z.object({
  name: z.string(),
  slug: z.string(),
  category: z.string(),
  brand: z.string(),
  description: z.string(),
  image: z.string(),
  price: z.string(),
  stock: z.number(),
});

export const signInFormSchema = z.object({
  email: z.string().email("ungültige Email"),
  password: z.string().min(5, "ist zu kurz"),
});

export const signUpFormSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
});
