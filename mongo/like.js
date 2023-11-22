"use strict";

const mongoose = require("mongoose");
const { connectDB } = require("./connect");

const like = async (req, res) => {
  console.log(req.body);
  const { movieid, userId, userName } = req.body;
  let mongoDB = await connectDB();
  let collection = mongoDB.collection("record");
  let dbResponse = await collection.findOne({ UserName:userName });
  if (dbResponse) {
    collection.updateOne(
      { _id: dbResponse._id },
      {
        $push: { Movieid: movieid },        
      }
    );
   
    
    console.log("liked");
    
   
  } else {
    try {
      collection.insertOne({
        UserName: userName,
        Userid:userId,
        Movieid: [movieid]
        // Movieid: movieid,
        // Userid: [userId],
        
      });
      console.log("Hurray");
    } catch (err) {
      console.log(err);
    }
  }

  res.send({
    'success': true
  });
  
};

module.exports = {
  like,
};
