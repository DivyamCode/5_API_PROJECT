const mongoose = require('mongoose');

//defining Schema for storing Cryptocurrency detail in DB

const Userschema = new mongoose.Schema({
    uuid : {
        type:String,
        required:true

    },
    user_name :{
        type:String,
        required:true
    },
    user_email :{
        type:String,
        required:true
    },
    user_password :{
        type:String,
        required:true
    },
    total_order :{
        type:String,
        required:true
    },
    created_at :{
        type:String,
        required:true
    },
    last_logged_in :{
        type:String,
        required:true
    }
})

const Register = new mongoose.model("userdata",Userschema);
module.exports = Register;
