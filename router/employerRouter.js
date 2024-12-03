import express from "express";
import {
  listEmployer,
  createEmployer,
  updateOneEmployer
} from "../controller/employerController.js";

const router = express.Router();

router.get("/get-all-employers", listEmployer);
router.post("/create-employer", createEmployer);
router.patch("/update-employers", updateOneEmployer);

export default router;
