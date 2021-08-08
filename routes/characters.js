const express = require("express");
const router = express.Router();
const axios = require("axios");

const Character = require("../models/Character");

router.get("/characters", async (req, res) => {
  try {
    let page = (req.query.page - 1) * 100;
    let name = req.query.name;
    console.log(name);
    if (name === undefined) {
      name = "";
    }
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}&skip=${page}&name=${name}`
    );
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/characters/:id", async (req, res) => {
  try {
    let characterId = req.params.id;
    console.log(characterId);

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters/?apiKey=${process.env.MARVEL_API_KEY}`
    );
    //let character = await response.getElementById(characterId);
    console.log(response.data);
    res.json(characterId);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
