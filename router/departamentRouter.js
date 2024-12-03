import express from "express";
import { listDepartament, createDepartament,editDepartament } from "../controller/departamentController.js";

const router = express.Router();

router.get("/get-all-departaments", listDepartament);
router.post("/create-departaments", createDepartament);
router.patch("/update-departaments/:id", editDepartament)

export default router;
