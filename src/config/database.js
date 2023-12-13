import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectDatabase = async () => {
  try {
    const URICONNECTION = process.env.DATABASE;
    const connection = await connect(URICONNECTION);
    console.log("Conexión exitosa");
    return connection;
  } catch (error) {
    throw Error("Error al conectar la base de datos"+error);
  }
};

export default connectDatabase;