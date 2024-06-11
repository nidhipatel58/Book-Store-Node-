let express=require("express");
let routes=express.Router();
let bookRoute=require("./book.route");


routes.use("/user",bookRoute);

module.exports=routes;