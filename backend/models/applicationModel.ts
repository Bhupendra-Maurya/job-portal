import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/db";
import User from "./userModel";
import Job from "./jobModel";

interface ApplicationAttributes {
  id?: number;
  jobId: number;
  jobSeekerId: number;
  status: "pending" | "accepted" | "rejected";
}

class Application extends Model<ApplicationAttributes> implements ApplicationAttributes {
  public id!: number;
  public jobId!: number;
  public jobSeekerId!: number;
  public status!: "pending" | "accepted" | "rejected";
}

Application.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    jobId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "jobs",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    jobSeekerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    status: {
      type: DataTypes.ENUM("pending", "accepted", "rejected"),
      allowNull: false,
      defaultValue: "pending",
    },
  },
  {
    sequelize,
    modelName: "Application",
    tableName: "applications",
    timestamps: true,
  }
);

// Define relationships
Application.belongsTo(User, { foreignKey: "jobSeekerId", as: "jobSeeker" });
User.hasMany(Application, { foreignKey: "jobSeekerId", as: "applications" });

Application.belongsTo(Job, { foreignKey: "jobId", as: "job" });
Job.hasMany(Application, { foreignKey: "jobId", as: "applications" });

export default Application;
