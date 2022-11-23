import { Request, Response } from "express"
import salaryService from "../services/salary.service" 


const salary =async (req: Request, res: Response) => {
    const salaryEntry = await salaryService.salary(req.body);
    const response = {
        success:true,
        message:"successfully added",
        data:salaryEntry
    };

    res.send(response)
}
const deleteSalary =async (req: Request, res: Response) => {
    const id = req.params.id;
    const deleteSalary = await salaryService.deleteSalary(id)
    const response = {
        success:true,
        message:"successfully deleted",
        data:deleteSalary
    };

    res.send(response)
}

const getSalary = async(req: Request, res: Response) => {
    const getSalary = await salaryService.getSalary(req.query)
    res.send(getSalary)

}

export default {
    salary,
    deleteSalary,
    getSalary
}