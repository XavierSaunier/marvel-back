const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Here comes marvel API" });
});

const comicRoute = require("./routes/comics");
app.use(comicRoute);
const characterRoute = require("./routes/characters");
app.use(characterRoute);

app.all("*", (req, res) => {
  res.status(400).json({ message: "page not found" });
});

app.listen(process.env.PORT, () => {
  console.log("server started");
});
