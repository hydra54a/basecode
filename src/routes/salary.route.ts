import express from "express";
import salaryController from '../controllers/salary.controller'
const router = express.Router();

router.post('/',salaryController.salary)
router.delete('/:id',salaryController.deleteSalary)
router.get('/',salaryController.getSalary)
export default router