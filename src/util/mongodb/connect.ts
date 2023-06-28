import mongoose from "mongoose";

const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/test";

export const connectMongoDB = () => {
  mongoose.connect(mongoURI);

  mongoose.connection.on("open", () =>
    console.log("Connected to mongo:", mongoURI)
  );
  mongoose.connection.on("error", (error: Error) => {
    console.log(error);
  });
};
