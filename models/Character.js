const mongoose = require("mongoose");

const Character = mongoose.model("Character", {
  thumbnail: {
    path: String,
    exention: String,
  },
  comics: Array,
  _id: String,
  name: String,
  description: String,
});

module.exports = Character;
