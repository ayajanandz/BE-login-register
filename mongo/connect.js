'use strict';
const { MongoClient } = require("mongodb");
const uri = 'mongodb://localhost:27017';
const databaseName ='testing1'
const client = new MongoClient(uri);

const connectDB = async () => {
    let result =  await client.connect();
    let mongoDB = result.db(databaseName);
    return mongoDB;
}

module.exports = {
    connectDB
}


