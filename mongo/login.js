"use strict";

const { connectDB } = require("./connect.js");

const login = async (req, res) => {
  const { email, password } = req.body;
  
  let mongoDB = await connectDB();
  let collection = mongoDB.collection("users");
  let dbResponse = await collection.findOne({ Email: email });
  console.log(dbResponse);
  if (dbResponse) {
    if (password === dbResponse.Password) {
      console.log(dbResponse);
      
      res.send({ body: dbResponse, status: 200 });
      
    } else {
      
      res.send({ body: {}, status: 200 });
    }
  } else {
    
    res.send({ message: "User not resgistered" });
  }
};

module.exports = {
  login,
};
