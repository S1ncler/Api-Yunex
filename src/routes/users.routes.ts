import { Router } from "express";
import Controllers from "../controllers/index";

const router = Router();


router.get("/", Controllers.Users.get_users);
router.get("/:email", Controllers.Users.get_user);
//router.post("/", Controllers.Users.post_user);
router.put("/:email", Controllers.Users.put_user);
router.delete("/:email", Controllers.Users.delete_user);

export { router }