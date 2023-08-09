const MovieController = require("../models/movie");
const ModelCategory = require("../models/category");
const { Op } = require("sequelize");
const fsFile = require("fs");

exports.createMovie = (req, res, next) => {
  console.log("body ---- ", req.body);
  MovieController.create({
    title: req.body.title,
    year: req.body.year,
    duration: req.body.duration,
    productor: req.body.productor,
    actors: req.body.actors,
    description: req.body.description,
    image: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
  })
    .then((movie) => {
      ModelCategory.findOne({ where: { id: req.body.categoryId } })
        .then((categorie) => {
          if (categorie) {
            movie
              .addCategory(categorie)
              .then(() => {
                res.status(200).json({ success: 1 });
              })
              .catch((err) => {
                console.error(
                  "Erreur lors de l'association du film à la catégorie:",
                  err
                );
                MovieController.destroy({
                  where: {
                    id: movie.id,
                  },
                });
                res.status(401).json({ err });
              });
          } else {
            MovieController.destroy({
              where: {
                id: movie.id,
              },
            });
            res
              .status(401)
              .json({ success: 0, message: "Categorie non trouvee " });
          }
        })
        .catch((err) => {
          console.error("Erreur lors de la recherche de la catégorie:", err);
          MovieController.destroy({
            where: {
              id: movie.id,
            },
          });
          res.status(401).json({ err });
        });
    })
    .catch((error) => res.status(401).json({ error }));
};

exports.updateMovie = (req, res, next) => {
  console.log("body ---- ", req.body);

  MovieController.findOne({
    where: { id: req.params.id },
  })
    .then((movie) => {
      if (movie) {
        ModelCategory.findOne({
          where: { id: req.body.categoryId },
        })
          .then((category) => {
            if (category) {
              var movieUpdate = {
                title: req.body.title,
                year: req.body.year,
                duration: req.body.duration,
                productor: req.body.productor,
                actors: req.body.actors,
                description: req.body.description,
              };
              if (req?.file) {
                if (movie.image) {
                  console.log("--------------------- 1 image", movie.image);
                  const filename = movie.image.split("/images/")[1];
                  fsFile.unlink(`images/${filename}`, () => { });
                  movieUpdate["image"] = `${req.protocol}://${req.get(
                    "host"
                  )}/images/${req.file.filename}`;
                } else {
                  console.log("--------------------- 2 file");
                  movieUpdate["image"] = `${req.protocol}://${req.get(
                    "host"
                  )}/images/${req.file.filename}`;
                }
              }
              movie
                .update(movieUpdate)
                .then(() => {
                  // console.log(movie.setCategories())
                  movie
                    .setCategories([category])
                    .then(() => {
                      console.log(
                        `movie update category ------------------ ok`
                      );
                      return res
                        .status(200)
                        .json({ success: 1, message: "Film mis à jour" });
                    })
                    .catch((error) =>
                      res.status(401).json({
                        message: "Erreur lors de la mise à jour de la relation",
                        success: 0,
                      })
                    );
                })
                .catch((error) =>
                  res.status(401).json({
                    message: "Erreur lors de la mise à jour du film",
                    success: 0,
                  })
                );
            } else {
              res
                .status(401)
                .json({ message: "Catégorie non trouvée", success: 0 });
            }
          })
          .catch((error) =>
            res.status(401).json({ error: "Erreur", success: 0 })
          );
      } else {
        res.status(401).json({ message: "Film non trouvée", success: 0 });
      }
    })
    .catch((error) => res.status(401).json({ error: "Erreur", success: 0 }));
};

exports.getOneMovie = (req, res, next) => {
  MovieController.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: ModelCategory,
      },
    ],
  })
    .then((movie) => res.status(200).json(movie))
    .catch((error) => res.status(401).json({ error }));
};

exports.getAllMovie = (req, res, next) => {
  MovieController.findAll({
    include: [
      {
        model: ModelCategory,
      },
    ],
  })
    .then((movies) => {
      // console.log("movies ---------- ", movies);
      return res.status(200).json(movies);
    })
    .catch((error) => res.status(401).json({ error }));
};

exports.getFilterMovie = (req, res, next) => {
  console.log("req body --- ", req.body);
  const orderValue = req.body.order;
  const searchValue = req.body.search;
  const categoryId = req.body.categoryId;
  var options = {};

  if (orderValue) {
    options["order"] = [[`${orderValue}`, "ASC"]];
  }

  if (`${searchValue}`.trim().length > 0) {
    options["where"] = {
      title: {
        [Op.like]: `${searchValue}%`,
      },
    };
  }

  if (categoryId) {
    options["include"] = [
      {
        model: ModelCategory,
        where: {
          id: categoryId,
        },
      },
    ];
  } else {
    options["include"] = [
      {
        model: ModelCategory,
      },
    ];
  }
  
  // console.log("options --- ", options);

  MovieController.findAll(options)
    .then((movies) => {
      return res.status(200).json(movies);
    })
    .catch((error) => res.status(401).json({ error }));
};

exports.deleteMovie = (req, res, next) => {
  MovieController.findOne({
    where: { id: req.params.id },
  })
    .then((movie) => {
      const filename = movie.image.split("/images/")[1];
      fsFile.unlink(`images/${filename}`, () => {
        MovieController.destroy({
          where: {
            id: movie.id,
          },
        })
          .then((movie) => {
            console.log(
              "test ---------------------------------  Objet supprimé movie"
            );
            return res
              .status(200)
              .json({ message: "Objet supprimé !", success: 1 });
          })
          .catch((error) => res.status(401).json({ error }));
      });
    })
    .catch((error) => res.status(401).json({ error }));
};
