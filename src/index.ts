const express = require('express');
import { Request, Response } from "express";
const app = express();
const port = 3000;

app.get('/', async (req: Request, res: Response) => {
  res.send('hello noam');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});