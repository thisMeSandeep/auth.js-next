import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Connected to db");
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Error connecting DB:", err.message);
    } else {
      console.error("Unexpected error in DB:", err);
    }
    process.exit(1);
  }
};

export default connectDb;
