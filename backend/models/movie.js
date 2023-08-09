var { DataTypes } = require("sequelize");
const movieDB = require("../db/db");

const Movie = movieDB.define(
    "Movie",
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        productor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        actors: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        image: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false,
    }
);
module.exports = Movie;


