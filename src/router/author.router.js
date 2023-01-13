const express=require("express");
const authorModel = require("../model/author.model");
const authorRouter=express.Router();


authorRouter.get("/",async(req,res)=>{
try {
    return res.send("hii")
} catch (err) {
    
}
})

authorRouter.post("/addAuthor",async(req,res)=>{
    try {
const {AuthorId,Name,PhoneNO,BirthDate,DeathDate,AuthorImage}=req.body;
let Bday=BirthDate.split("-")[0];
let Dday=DeathDate.split("-")[0];
Bday=+Bday;
Dday=+Dday;
if(Bday!==null&&Bday>31){
    return res.status(403).send("invalid Birth date")
}
if(Dday!==null&&Dday>31){
    return res.status(403).send("invalid Death date")
}

let auth= new authorModel({AuthorId,Name,PhoneNO,BirthDate,DeathDate,AuthorImage})

auth=await auth.save();
return res.status(200).send("success")
        
    } catch (err) {
        return res.status(401).send("unAutherized",err)
    }
    })
    

module.exports=authorRouter;