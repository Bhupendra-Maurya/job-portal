import { Request, Response } from "express";
import { connectDB } from "../db/db";
import { config } from "../config/config";
import app from "./app";

app.listen(config.server.port, () => {
  connectDB();
  console.log(`http://localhost:${config.server.port}/`);
});
