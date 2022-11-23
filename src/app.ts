
import express, { Express, Request, Response } from 'express';
import helmet from "helmet";
import cors from "cors";
import routes from "./routes/index"

const app: Express = express();

// set security HTTP headers
app.use(helmet());

app.use(cors())

app.use(express.json())

app.use('/v1', routes)

export default app