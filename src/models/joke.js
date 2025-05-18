const sequelize = require("../database/db");
const { DataTypes } = require("sequelize");

const Joke = sequelize.define("joke", {
  id: {
    field: "joke_id",
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  from: {
    field: "joke_from",
    type: DataTypes.STRING,
    allowNull: true,
  },
  question: {
    field: "joke_question",
    type: DataTypes.STRING,
    allowNull: false,
  },
  answer: {
    field: "joke_answer",
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    field: "joke_created_at",
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Joke;
