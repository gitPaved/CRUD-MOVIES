var { DataTypes } = require("sequelize");
const categoryDB = require("../db/db");

const Category = categoryDB.define(
    "Category",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = Category;
