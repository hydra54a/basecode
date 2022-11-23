import express from "express";
import userController from '../controllers/user.controllers'
const router = express.Router();

router.post('/login',userController.authLogin)
export default router