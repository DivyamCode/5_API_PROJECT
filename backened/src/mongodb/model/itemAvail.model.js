const mongoose = require('mongoose');



const Itemschema = new mongoose.Schema({
    Item_name :{
        type:String,
        required:true
    },
    volume :{
        type:String,
        required:true
    },
    price :{
        type:String,
        required:true
    },
    packed_food :{
        type:Boolean,
        required:true
    },
})

const Item = new mongoose.model("item",Itemschema);
module.exports = Item;