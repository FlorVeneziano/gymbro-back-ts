import { DataTypes } from "sequelize";
import sequelize from "../index";

const Routine = sequelize.define(
  "Routine",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    routine: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  { createdAt: true, updatedAt: true }
);

export default Routine;
