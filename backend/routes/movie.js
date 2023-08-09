const expressMovie = require("express");
const routerMovie = expressMovie.Router();
const moviesCtrl = require("../controllers/movie");
const multr = require("../middleware/multer-config");

routerMovie.post("/create", multr, moviesCtrl.createMovie);
routerMovie.put("/:id", multr, moviesCtrl.updateMovie);
routerMovie.get("/", moviesCtrl.getAllMovie);
routerMovie.post("/filter", moviesCtrl.getFilterMovie);
routerMovie.get("/:id", moviesCtrl.getOneMovie);
routerMovie.delete("/:id", moviesCtrl.deleteMovie);

module.exports = routerMovie;
