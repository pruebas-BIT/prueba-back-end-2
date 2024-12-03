import express from "express";
import employerRouter from "./employerRouter.js";
import departamentRouter from "./departamentRouter.js";

const router = express.Router();

router.use("/employer", employerRouter);
router.use("/departament", departamentRouter);

export default router;
