import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/db";

interface UserAttributes {
  id?: number;
  name: string;
  email: string;
  password: string;
  role: "job_seeker" | "employer" | "admin";
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public role!: "job_seeker" | "employer" | "admin";
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("job_seeker", "employer", "admin"),
      allowNull: false,
      defaultValue: "job_seeker",
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: true,
  }
);

export default User;
