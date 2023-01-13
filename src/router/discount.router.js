const express=require("express");
const discountModel = require("../model/discount.model");
const discountRouter=express.Router();


discountRouter.get("/",async(req,res)=>{
res.send("I'm on")
})


module.exports=discountRouter;