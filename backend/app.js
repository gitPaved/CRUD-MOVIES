const express = require("express");
const path = require("path");
const db = require("./db/db");
require("./models/movieCategory");
const movieRoutes = require("./routes/movie");
const categoryRoutes = require("./routes/category");
// const insert = require("./insert");

const app = express();


app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api/movie", movieRoutes);
app.use("/api/category", categoryRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

db.sync();

module.exports = app;
