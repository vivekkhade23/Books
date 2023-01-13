const bookModel = require("../model/book.model");
const express=require("express");
const authorModel = require("../model/author.model");
const bookRouter=express.Router();


bookRouter.get("/",async(req,res)=>{
res.send("I'm on")
})

bookRouter.get("/category",async(req,res)=>{
  try {
    let cat=await bookModel.find({})
    let bag={};
    for(let i=0;i<cat.length;i++){
if(bag[cat[i].Category]===undefined){
    bag[cat[i].Category]=1
}else{
    bag[cat[i].Category]++
}
    }

let arr=[];

for(let key in bag ){
    arr.push(key)
}
return res.send(arr)

  } catch (err) {
    return res.status(401).send("unAutherized")

  }
    })
    


    bookRouter.get("/mostsold",async(req,res)=>{
        try {
            
          let cat=await bookModel.find({})
          let max=-Infinity;
          for(let i=0;i<cat.length;i++){
            if(max<cat[i].SoldCount){
      console.log(cat[i].SoldCount,"cat")
        max=cat[i].SoldCount
    }
          }
      
      return res.send(max)
      
        } catch (err) {
            return res.status(401).send("unAutherized")

        }
          })
        
          
          bookRouter.get("/:AuthorName",async(req,res)=>{
            try {
           let name=req.params;
           let authorid= await authorModel.find({name})._id[0]
         let author=  await bookModel.find({_id:authorid})
           return res.send(author)
            } catch (err) {
                return res.status(401).send("unAutherized")
 
            }
              })
              
          
              
              bookRouter.get("/mostsold",async(req,res)=>{
                  try {
                    let cat=await bookModel.find({})
               let max=-Infinity;
                    for(let i=0;i<cat.length;i++){
              if(max<cat[i].SoldCount){
                  max=cat[i].SoldCount
              }
                    }
                
              
                return res.send(max)
                
                  } catch (err) {
                    return res.status(401).send("unAutherized")

                  }
                    })
                    


bookRouter.post("/addBookToCatalog",async(req,res)=>{
  try {
    const {BookId,Title,AuthorId,Publisher,Category,Price,SoldCount,Imageurl}=req.body;

    let book= new bookModel( {BookId,Title,AuthorId,Publisher,Category,Price,SoldCount,Imageurl})

    book=await book.save();
    return res.status(200).send("success")
            
        } catch (err) {
            return res.status(401).send("unAutherized",err)
        }
        })
    
    

module.exports=bookRouter;