import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDatabase from "./dataBase/mongoConnet.js";
import apiRouter from "./router/apiRouter.js";

const app = express();

dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Conectar a la base de datos
connectDatabase();

// Rutas
app.use("", apiRouter);

// Iniciar servidor
const port = process.env.PORT || 5020;
app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});

// Exportar la aplicación
export default app;
