const expressCategory = require("express");
const routerCategory = expressCategory.Router();
const categoriesCtrl = require("../controllers/category");


routerCategory.get("/",categoriesCtrl.getAllCategory);
routerCategory.get("/:id",categoriesCtrl.getOneCategory);

module.exports = routerCategory;