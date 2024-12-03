import express from "express";
import { listDepartament, createDepartament,editDepartament, remove } from "../controller/departamentController.js";

const router = express.Router();

router.get("/get-all-departaments", listDepartament);
router.post("/create-departaments", createDepartament);
router.patch("/update-departaments/:id", editDepartament)
router.delete("/delete-departament/:codigo", remove )

export default router;
