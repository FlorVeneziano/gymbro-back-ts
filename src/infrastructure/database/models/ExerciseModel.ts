import { DataTypes } from "sequelize";
import sequelize from "../index";

const Exercise = sequelize.define("Exercise", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(1000),
    allowNull: true,
  },
});

export default Exercise;
