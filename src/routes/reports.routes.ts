import { Router } from "express";
import Controllers from "../controllers/index";

const router = Router();


router.get("/", Controllers.Reports.get_reports);
router.get("/:id", Controllers.Reports.get_report);
router.post("/", Controllers.Reports.post_report);
router.put("/:id", Controllers.Reports.put_report);
router.delete("/:id", Controllers.Reports.delete_report);

export { router }