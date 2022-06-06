const express = require('express');
import { Request, Response } from "express";
import { connectToDatabase } from "./database";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 3000;


app.get('/', (req: Request, res: Response) => {
  res.send(process.env.MONGO_DB_NAME);
});

connectToDatabase();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});