const fs = require("fs");
const mysql = require("mysql2");

// Configurer les informations de connexion à la base de données MySQL
const dbConfig = {
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "movie",
};

// Insérer les données Movie dans la base de données
const insertMovie =
    "INSERT INTO movies (title, year, duration,productor, actors,description,image) VALUES (?, ?, ?,?,?,?,?)";

const insertCategoryMovie =
    "INSERT INTO movie_category (MovieId,CategoryId) VALUES (?,?)";

const selectCategory = "SELECT id FROM categories where name = ?";

const insertCategory = "INSERT INTO categories (name) VALUES (?)";

async function insertMoviesAndCategories(connection, jsonData) {
    for (const item of jsonData.movies) {
        const valuesMovies = [
            item.Titre,
            item.Annee,
            item.Duree,
            item.Producteur,
            item.Acteurs,
            item.Description,
            item.ImageUrl,
        ];

        try {
            const [insertResult] = await connection.query(insertMovie, valuesMovies);
            console.log("Film inséré avec succès. ID:", insertResult.insertId);

            for (const genre of item.Genre) {
                const [selectResult] = await connection.query(selectCategory, genre);
                console.log("Catégorie insérée avec succès. Résultats:", selectResult);
                const categoryId = selectResult[0].id; // Assurez-vous que la structure du résultat est correcte

                // Insérer la relation entre le film et la catégorie
                const valuesCategoryMovie = [insertResult.insertId, categoryId];
                await connection.query(insertCategoryMovie, valuesCategoryMovie);
                console.log("Relation insérée avec succès.");
            }
        } catch (err) {
            console.error("Erreur lors de l'insertion des données:", err);
        }
    }

    // Fermer la connexion à la fin de toutes les opérations
    // connection.end();
}

// Lire le contenu du fichier JSON
module.exports = fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
        console.error("Erreur lors de la lecture du fichier JSON:", err);
        return;
    }

    // Analyser le contenu JSON en un objet JavaScript
    const jsonData = JSON.parse(data);

    // Créer une connexion à la base de données
    const connection = mysql.createConnection(dbConfig);

    //Insérer les données category dans la base de données
    for (const category of jsonData.genres) {
        const values = [category];

        connection.query(insertCategory, values, (err, results) => {
            if (err) {
                console.error("Erreur lors de l'insertion des données:", err);
                return;
            }
            // console.log("ID de la catégorie insérée:", results.insertId);
        });
    }

    for (const movie of jsonData.movies) {
        const valuesMovies = [
            movie.Titre,
            movie.Annee,
            movie.Duree,
            movie.Producteur,
            movie.Acteurs,
            movie.Description,
            movie.ImageUrl,
        ];
        connection.query(insertMovie, valuesMovies, (err, results) => {
            if (err) {
                console.error("Erreur lors de l'insertion des données:", err);
                return;
            }
            var movieId = results.insertId;
            // console.log("ID de du film insérées:", results.insertId);
            for (const genre of movie.Genre) {
                connection.query(selectCategory, genre, (err, results) => {
                    if (err) {
                        console.error("Erreur lors de l'insertion des données:", err);
                        return;
                    }
                    // console.log("Données insérées avec recordCategory:", results);
                    var values = [movieId, results[0].id];
                    connection.query(insertCategoryMovie, values, (err, results) => {
                        if (err) {
                            console.error("Erreur lors de l'insertion des données:", err);
                            return;
                        }
                        console.log("Données insérées avec recordMoviceCategory:", results);
                    });
                });
            }
        });
    }
    // Fermer la connexion à la base de données
    // connection.end();
});
