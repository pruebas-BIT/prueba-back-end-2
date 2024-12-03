import express from "express"
import { listEmployer } from "../controller/employerController.js";

const router = express.Router();

router.get('/get-all-employers', listEmployer)

export default router;