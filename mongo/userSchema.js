
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    Name:"String",
    Email:{type:"String", unique:true},
    Password:"String"
});

const User = new mongoose.model("User", userSchema)

module.exports = mongoose.model("User",userSchema);
