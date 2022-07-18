import mongoose from "mongoose";

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(process.env.DB, connectionParams);
    console.log("connected to db");
  } catch (e) {
    console.log("error connecting to db");
  }
};
