const CategoryController = require("../models/category");


exports.getOneCategory = (req, res, next) => {
    CategoryController.findOne({ where: { id: req.params.id } })
      .then((category) => res.status(200).json(category))
      .catch((error) => res.status(400).json({ error }));
  };


exports.getAllCategory = (req, res, next) => {
    CategoryController.findAll()
        .then((categories) => {
            // console.log("categories ---------- ", categories);
            return res.status(200).json(categories);
        })
        .catch((error) => res.status(400).json({ error }));
};
