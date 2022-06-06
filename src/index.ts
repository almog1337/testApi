const express = require('express');
import { Request, Response } from "express";
import { connectToDatabase } from "./database";
const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello hunters');
});

connectToDatabase();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});