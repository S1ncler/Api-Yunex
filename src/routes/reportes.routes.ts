import { Router } from "express";
import Controllers from "../controllers/index";

const router = Router();


router.get("/", Controllers.Reportes.get_reportes);

export { router }