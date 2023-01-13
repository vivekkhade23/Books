

const mongoose=require("mongoose")


const authorSchema=new mongoose.Schema({
    AuthorId:{type:String,required:true},
    Name:{type:String,required:true},
    PhoneNO:{type:Number,required:true},
    BirthDate:{type:String,required:true}, 
    DeathDate:{type:String,required:true},
    AuthorImage:{type:String,required:true}
})


const authorModel=mongoose.model("author",authorSchema)

module.exports=authorModel




