const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email : {
        type : String,
        required:(true,"email is required"),
        unique:(true,"duplicate error")
    },
    pwd : {
        type : String,
        required:(true,"password is required")

    },
    cpwd:{
        type:String
    },
    ph:{
        type:Number
    }
    
});

module.exports = mongoose.model("User",userSchema,"fridaydata");