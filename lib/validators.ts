import { z } from "zod";

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
