import { Request,Response } from "express"
import express from 'express'
import { connectDB } from "../db/db"
import { config } from "../config/config"

const app = express()

connectDB()
app.get('/', (req:Request,res:Response) =>{
  res.send('Hello World')
})

app.listen(config.server.port,()=>{
    console.log(`http://localhost:${config.server.port}/`)
})