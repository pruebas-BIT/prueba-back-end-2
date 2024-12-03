import express from "express";
import { listDepartament } from "../controller/departamentController.js";

const router = express.Router();

router.get("/get-all-departaments", listDepartament);

export default router;
