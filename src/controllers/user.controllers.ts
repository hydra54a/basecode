import { Request, Response } from "express"
import authService from "../services/user.services" 


const authlogin =async (req: Request, res: Response) => {
    const {email,password} = req.body;
    const authLogin = await authService.authLoginService(email,password)
    console.log(authLogin)
}

export default {
    authLogin: authlogin
}