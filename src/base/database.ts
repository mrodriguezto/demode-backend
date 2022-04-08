import env from "./env";
import mongoose, { ConnectOptions } from "mongoose";

const mongooseOptions: ConnectOptions = {
  autoIndex: true,
  user: env.MONGO_USER,
  pass: env.MONGO_PASSWORD,
  dbName: env.MONGO_DATABASE,
};

mongoose
  .connect(`mongodb+srv://${env.MONGO_HOST}/`, mongooseOptions)
  .then((res) => {
    console.log("Conexión establecida: ", res.connection.name);
  })
  .catch((err) => {
    console.error("Error: ", err);
  });
