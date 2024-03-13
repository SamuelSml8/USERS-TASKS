// Database connection
import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://samuel8:t4ImxkPNMXAhIrLt@users-nodejs.eyxgrp5.mongodb.net/test"
    );
    console.log("DB is connected");
  } catch (error) {
    console.log(error);
  }
};