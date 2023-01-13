const mongoose=require("mongoose")


const bookSchema=new mongoose.Schema({
    BookId:{type:String,required:true},
    Title:{type:String,required:true},
    AuthorId:{type:Array,required:true},
    Publisher:{type:String,required:true}, 
    Category:{type:String,required:true},
    Price:{type:Number,required:true},
    SoldCount:{type:Number,required:true},
    Imageurl:{type:String,required:true}
})


const bookModel=mongoose.model("book",bookSchema)

module.exports=bookModel