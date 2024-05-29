import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb+srv://zobair:29062000@cluster0.ko1pve2.mongodb.net/foodi")
    .then(() => console.log("DB Connected"));
};
