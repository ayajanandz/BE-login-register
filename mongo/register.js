'use strict';
const mongoose = require("mongoose");

const { connectDB } = require("./connect");



const register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name , email, password);
  let mongoDB = await connectDB();
  let collection = mongoDB.collection("users");
  let dbResponse = await collection.findOne({ Email: email });

  if(dbResponse){
    res.send({message: "User already exists "})
  }
  else {
    try{
    
    collection.insertOne({
      Name:name,
      Email:email,
      Password:password
    })
    console.log("inserted new user details")
  } catch(err){
    console.log(err);
  }
    
  }

}

module.exports = {
    register,
};