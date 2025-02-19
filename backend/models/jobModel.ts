import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/db";
import User from "./userModel";

interface JobAttributes {
  id?: number;
  title: string;
  description: string;
  salary: number;
  employerId: number;
}

class Job extends Model<JobAttributes> implements JobAttributes {
  public id!: number;
  public title!: string;
  public description!: string;
  public salary!: number;
  public employerId!: number;
}

Job.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    salary: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    employerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    sequelize,
    modelName: "Job",
    tableName: "jobs",
    timestamps: true,
  }
);

// Define relationships
Job.belongsTo(User, { foreignKey: "employerId", as: "employer" });
User.hasMany(Job, { foreignKey: "employerId", as: "jobs" });

export default Job;
