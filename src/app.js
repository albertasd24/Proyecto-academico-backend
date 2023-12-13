import Express, { json, urlencoded } from "express";
import connectDatabase from "./config/database.js";
import cors from "cors";
import routesApi from "./routes/index.js";

// Configuración del Servidor
const app = Express();
const PORT = process.env.PORT || 3401;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/mydatabase";

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

// Rutas de la API
routesApi(app);

// Conexión a la base de datos
connectDatabase(DATABASE_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });