import dotenv from "dotenv";

dotenv.config();

export const config = Object.freeze({
  db: {
    name: process.env.DB_NAME || "job_portal",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "bhuppi",
    host: process.env.DB_HOST || "localhost" || "127.0.0.1",
    dialect: "mysql",
  },
  server: {
    port: process.env.PORT || 5000,
  },
  JWT_SECRET:{
    JWT_SECRET:process.env.JWT_SECRET as string
  }
});
