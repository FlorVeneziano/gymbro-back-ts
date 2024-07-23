import { DataTypes } from "sequelize";
import sequelize from "../index";

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  mongoId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});

export default User;
