'use strict';
const mongoose = require("mongoose");
// const { User } = require('./userSchema');
const { connectDB } = require("./connect");

const userSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Password: String
})

const User = new mongoose.model("User", userSchema)


const register = async (req, res) => {
  const { name, email, password } = req.body
//   console.log(name , email, password);
  let mongoDB = await connectDB();
  let collection = mongoDB.collection("users");
  let dbResponse = await collection.findOne({ Email: email });

  if(dbResponse){
    res.send({message: "User already exists "})
  }
  else {
    const user = new User({
        name, 
        email,
        password
    })
    user.save(err => {
        if(err){
            res.send(err)
        } else{
            res.send({message: "Successfully Registered, Please Login now"})
        }
    })
  }

}

module.exports = {
    register,
};