const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/USERCART", { useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> console.log("connection succesfull ..."))
.catch((err)=>console.log(err));

console.log('connection success database');
