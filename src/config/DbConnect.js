const mongoose=require("mongoose")

const DbConnect=()=>{
    return mongoose.connect("mongodb+srv://Vivekkhade:k@cluster0.vdzwl6o.mongodb.net/gigin?retryWrites=true&w=majority").then(res=>console.log("connected")).catch(err=>console.log(err))
}

module.exports=DbConnect;