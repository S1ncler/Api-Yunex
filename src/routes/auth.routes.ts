import { Router } from "express";
import controllers from "../controllers/index";

const router = Router();

router.post("/register", controllers.Auth.registerCtrl);
router.post("/login", controllers.Auth.loginCtrl);
router.post("/verify", controllers.Auth.verifyLog)

export { router };