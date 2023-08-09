// createdAt: {
//     allowNull: false,
//     type: Sequelize.DATE,
//     defaultValue: Sequelize.fn("NOW"),
//     },
//     updatedAt: {
//     allowNull: false,
//     type: Sequelize.DATE,
//     defaultValue: Sequelize.fn("NOW"),
//     },




// const MovieModel = require("./movie");
// const CategoryModel = require("./category");
// const CategoryMovieDB = require("../db/db");
// var { DataTypes } = require("sequelize");

// const CategoryMovies = CategoryMovieDB.define(
//     "CategoryMovies",
//     {
//         MovieId: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: MovieModel, // 'Movies' would also work
//                 key: "id",
//             },
//         },
//         CategoryId: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: CategoryModel, // 'Actors' would also work
//                 key: "id",
//             },
//         },
//     },
//     {
//         timestamps: false,
//     }
// );
// MovieModel.belongsToMany(CategoryModel, { through: CategoryMovies });
// CategoryModel.belongsToMany(MovieModel, { through: CategoryMovies });

// CategoryMovies.sync();

// // console.log(
// //     "Models category ---- ",
// //     CategoryMovies === CategoryMovieDB.models.CategoryMovies
// // );

// module.exports = CategoryMovies;
