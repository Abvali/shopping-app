// import { z } from "zod";

// export const ProductSchema = z.object({
//   name: z.string(),
//   slug: z.string(),
//   category: z.string(),
//   description: z.string(),
//   image: z.string(),
//   price: z.number().nonnegative(),
//   brand: z.string(),
// });

// type Product = z.infer<typeof ProductSchema>;

const data = {
  products: [
    {
      name: "iPhone 13",
      slug: "iphone-13",
      category: "mobile",
      description:
        "Powerful smartphone with A15 Bionic chip and dual-camera system.",
      image: "/images/mobile/01.png",
      price: 1099,
      brand: "Apple",
      stock: 5,
    },
    {
      name: "Samsung Galaxy S24",
      slug: "samsung-galaxy-s24",
      category: "mobile",
      description: "Modern Android smartphone with excellent camera quality.",
      image: "/images/mobile/02.png",
      price: 999,
      brand: "Samsung",
      stock: 7,
    },
    {
      name: "Google Pixel 9",
      slug: "google-pixel-9",
      category: "mobile",
      description: "Clean Android experience with AI-powered features.",
      image: "/images/mobile/03.png",
      price: 899,
      brand: "Google",
      stock: 4,
    },
    {
      name: "MacBook Air M2",
      slug: "macbook-air-m2",
      category: "laptop",
      description: "Lightweight laptop with Apple's powerful M2 chip.",
      image: "/images/macbook/06.png",
      price: 1299,
      brand: "Apple",
      stock: 3,
    },
    {
      name: "Dell XPS 13",
      slug: "dell-xps-13",
      category: "laptop",
      description: "Premium ultrabook with excellent display and performance.",
      image: "/images/macbook/02.png",
      price: 1199,
      brand: "Dell",
      stock: 6,
    },
    {
      name: "Lenovo ThinkPad X1",
      slug: "lenovo-thinkpad-x1",
      category: "laptop",
      description: "Business laptop with robust build quality and keyboard.",
      image: "/images/macbook/03.png",
      price: 1399,
      brand: "Lenovo",
      stock: 2,
    },
    {
      name: "Wireless Headphones A4",
      slug: "wireless-headphones-a4",
      category: "headphone",
      description: "Comfortable wireless headphones with long battery life.",
      image: "/images/headphone/08.png",
      price: 49,
      brand: "Samsung",
      stock: 8,
    },
    {
      name: "Sony WH-1000XM5",
      slug: "sony-wh-1000xm5",
      category: "headphone",
      description: "Industry-leading noise cancelling headphones.",
      image: "/images/headphone/07.png",
      price: 349,
      brand: "Sony",
      stock: 5,
    },
    {
      name: "AirPods Pro 2",
      slug: "airpods-pro-2",
      category: "headphone",
      description: "Premium wireless earbuds with active noise cancellation.",
      image: "/images/headphone/01.png",
      price: 249,
      brand: "Apple",
      stock: 10,
    },
  ],
};

export default data;
