import express, { Express, Request, Response } from 'express';
import appConfig from './services/httpserver';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT;

const app = express();

const server = appConfig(app);

server.listen(port,()=>{
    console.log(`App is running on http://localhost:${port}`);

})
