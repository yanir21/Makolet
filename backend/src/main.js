// @/main.js
const express = require("express");
const mongoose = require("mongoose");
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const app = express();

app.use(express.json());

const username = process.dotenv.MONGO_USERNAME
const password = process.dotenv.MONGO_USERNAME

app.get("/", async (req, res) => {
    try {
        await mongoose.connect(
          `mongodb+srv://&{}:@yanir-toar.0tfcqu7.mongodb.net/?retryWrites=true&w=majority`
        );
  return res.json({ message: "Hello, World ✌️" });
});

const start = async () => {
  try {
    app.listen(3000, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();