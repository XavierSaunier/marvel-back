const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comics", async (req, res) => {
  try {
    let page = (req.query.page - 1) * 100;
    let title = req.query.title;
    if (title === undefined) {
      title = "";
    }
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}&skip=${page}&title=${title}`
    );

    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/comics/:id", async (req, res) => {
  try {
    let id = req.params.id;
    const comic = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.id}?apiKey=${process.env.MARVEL_API_KEY}`
    );

    console.log(req.params.id);
    console.log(comic.data);
    res.json(comic.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
