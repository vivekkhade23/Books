


const mongoose=require("mongoose")


const discountSchema=new mongoose.Schema({
    BookId:{type:String,required:true},
    DiscountPercentage:{type:Number,required:true}
})


const discountModel=mongoose.model("discount",discountSchema)

module.exports=discountModel
