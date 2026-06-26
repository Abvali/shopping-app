import { hashSync } from "bcryptjs";

export const userData = {
  users: [
    {
      name: "Admin",
      email: "abvali.maryam@gmail.com",
      password: hashSync("12345", 10),
      role: "admin",
    },
    {
      name: "User",
      email: "user@onlineshop.com",
      password: hashSync("12345", 10),
      role: "user",
    },
  ],
};
