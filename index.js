const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Here comes marvel API" });
});

app.get("/comics", async (req, res) => {
  try {
    const response = await axios.get(
      `https://marvel-back-xsaunier.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}`
    );
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log("server started");
});
