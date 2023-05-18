import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import dbConnect from './config/mongo';
import { router } from "./routes";

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(json());
dbConnect().then(() => console.log("Conectado a la base de datos"));
app.use(router);

app.listen(PORT, () => console.log("Ready port 3002"));
