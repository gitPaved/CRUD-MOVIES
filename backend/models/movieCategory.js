const Film = require("../models/movie");
const Categorie = require("../models/category");


// Configurez les associations
Film.belongsToMany(Categorie, { through: "movie_Category",createdAt: false, updatedAt: false, });
Categorie.belongsToMany(Film, { through: "movie_Category",createdAt: false, updatedAt: false, });
