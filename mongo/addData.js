'use strict'

const { connectDB } = require('./connect');

const addData = async(req) =>{
    let mongoDB = await connectDB();
    const movies = mongoDB.collection("movies");
    console.log(req.body.name);
    
       const doc = {
        Name:req.body.name,
        Director:req.body.director,
        Genre:req.body.genre,
        Year:req.body.year,
        Rating:req.body.rating
        
    
    }
    const result = await movies.insertOne(doc);

    
    console.log("Data entered successfully" +JSON.stringify(result)); 
    
    return result;

  
}


module.exports = {
    addData
};