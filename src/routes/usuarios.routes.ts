import { Router } from "express";
import Controllers from "../controllers/index";

const router = Router();


router.get("/", Controllers.Usuarios.get_usuarios);

export { router }