import express from "express";
import {
  listEmployer,
  createEmployer,
  updateOneEmployer,
  DeleteEmployer
} from "../controller/employerController.js";

const router = express.Router();

router.get("/get-all-employers", listEmployer);
router.post("/create-employer", createEmployer);
router.patch("/update-employers", updateOneEmployer);
router.delete("/delete-employer/:codigo", DeleteEmployer)
export default router;
