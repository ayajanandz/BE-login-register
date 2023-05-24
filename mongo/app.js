"use strict";
const { getData } = require("./book");
const { addData } = require("./addData");
const { login } = require("./login");
const { register } = require('./register');

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB using MongooseJS");
});

const app = express();

app.use(cors());
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/login", async(req, res) => {
   await login(req, res);
});

app.post("/register", async(req,res) => {
        await register(req, res);
})

app.get("/test", async (req, res) => {
  let responseBook = await getData(req);
  res.send(responseBook);
});

app.post("/addData", async (req, res) => {
  let result = await addData(req);
  res.send(result);
});

app.listen(port, () => {
  console.log("Server is live and listening at port :", port);
});
