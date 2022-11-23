import express from "express";

import authRoute from "./user.route";
import salaryRoute from "./salary.route";


const router = express.Router();

const defaultRoutes = [
    {
        path: '/auth',
        route: authRoute,
    },
    {
        path: '/salary',
        route: salaryRoute,
    }
]

defaultRoutes.forEach((route) =>{
    router.use(route.path, route.route)
})

export default router;