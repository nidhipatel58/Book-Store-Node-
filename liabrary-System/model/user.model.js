let mongoose=require("mongoose");

let userSchema=new mongoose.Schema({

    title:{
        type:String,
    },
    author:{
        type:String,
    },
    pages:{
        type:Number,
    },
    published_date:{
        type:Date,
        default:Date.now
    },
    availability: {
        type: String,
        enum: ['Available', 'Checked Out', 'Reserved'],
        default: 'Available'
    },
    language:{
        type:String,
        require:false
    }
});

let books=mongoose.model("Books",userSchema)
module.exports=books;