import mongoose from "mongoose";

export const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "Crypto",
    })
    .then(() => {
      console.log("Connected to database successfully");
    })
    .catch((error) => {
      console.log(
        "Some error occurs while connecting to database",
        error.message
      );
    });
};
