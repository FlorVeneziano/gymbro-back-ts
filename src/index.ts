import express from "express";
import dotenv from "dotenv";
import sequelize from "./infrastructure/database";
import routesV1 from "./infrastructure/webserver/routes/v1/routes";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use(cors());

app.use("/api/v1", routesV1);

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error sincronizando la base de datos:", error);
  });
