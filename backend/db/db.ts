import { Sequelize } from 'sequelize';
import { config } from '../config/config';

const sequelize = new Sequelize(
  config.db.name,
  config.db.user,
  config.db.password,
  {
    host: config.db.host,
    dialect: "mysql",
    logging: false,
  }
);

const connectDB = async () => {
    try {
      await sequelize.authenticate();
      console.log("Database connected successfully");
  
      // Sync models
      await sequelize.sync({ alter: true }); // Use { force: true } only for development
      console.log("Models synchronized successfully");
    } catch (error) {
      console.error("Database connection failed:", error);
      process.exit(1);
    }
  };

export {sequelize, connectDB };



