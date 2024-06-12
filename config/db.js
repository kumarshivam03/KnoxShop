import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to Mongo Database ${conn.connection.host}`.bgYellow.white
    );
  } catch (error) {
    console.log(`Error in MongoDb is ${error}`.bgRed.white);
  }
};
export default connectDB;
