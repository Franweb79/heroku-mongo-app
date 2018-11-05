const mongoose=require('mongoose');

let mySchema=new mongoose.Schema(
    {
        createdAt:Date,
        firstName:String,
        lastName:String
    }

);

let User=mongoose.model('User',mySchema);

module.exports=User;