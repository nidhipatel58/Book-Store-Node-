let mongoose=require("mongoose");


let productSchema=new mongoose.Schema({

    Name:{
        type:String,
    },
    price:{
         type:Number,
    },
    info:{
        type:String,
    }
});


let product=mongoose.model("product",productSchema);
module.exports=product;