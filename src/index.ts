const express = require('express');
import { Request, Response } from "express";
import { connectToDatabase } from "./database";
import dotenv from "dotenv";
import { addUser, deleteUser, getAll } from "./userService";

dotenv.config();
const app = express();
const port = 3000;


app.get('/', async (req: Request, res: Response) => {
  res.send(process.env.OPENSHIFT_MONGODB_DB_URL);
});

app.post('/:username', async (req: Request, res: Response) => {
  if(! (req.params.username)) {
    console.log("username undefined");
    res.status(400).send();
    return;
  }

  await addUser(req.params.username);
  res.send();
});

app.delete('/:username', async (req: Request, res: Response) => {
  if(! (req.params.username)) {
    console.log("username undefined");
    res.status(400).send();
    return;
  }

  await deleteUser(req.params.username);
  res.send();
});

connectToDatabase();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});