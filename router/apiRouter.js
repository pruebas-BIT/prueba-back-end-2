import express from 'express';
import employerRouter from './employerRouter.js'

const router = express.Router();

router.use('/employer',employerRouter);


export default router;