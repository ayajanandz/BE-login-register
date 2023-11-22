"use strict";
const { getData } = require("./book");
const { addData } = require("./addData");
const { login } = require("./login");
const { register } = require('./register');
const { like } = require('./like');

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require('dotenv');

dotenv.config()

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB using MongooseJS");
});

const app = express();

app.use(cors());
const port = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/login", async(req, res) => {
   await login(req, res);
});

app.post("/register", async(req,res) => {
  console.log(res.data);
        await register(req, res);
})

app.post("/like", async(req,res) => {
  console.log(res.data);
     await like(req,res); 
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
