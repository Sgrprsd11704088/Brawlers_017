import { connect } from "mongoose";

const connectDB = async (uri) => {
  try {
    await connect(uri);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
