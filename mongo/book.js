'use strict';
//make it a common method - getDataFromDb
const {connectDB} = require('./connect.js');

const getData = async (req) => {
    console.log("Request served for the category: " , req.query.category);
    //console.log("hey there frontend");
    let category = req.query.category;
    
    let mongoDB = await connectDB();
    let collection = mongoDB.collection(category);
    let data = await collection.find({}).toArray();
    
    return data;
}


module.exports = {
    getData
};



