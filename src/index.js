const express = require('express')
const bodyParser=require("body-parser")
const dotenv = require('dotenv')
const cors=require('cors')
const bookRouter = require('./router/book.router')
const authorRouter = require('./router/author.router')
const discountRouter = require('./router/discount.router')
const DbConnect = require('./config/DbConnect')
let PORT =process.env.PORT || 8080
dotenv.config()
const app = express()
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(bodyParser.json())

app.get('/' , (req , res) => { return  res.send('Namshkar') })
app.use("/book",bookRouter)
app.use("/author",authorRouter)
app.use("/discount",discountRouter)

app.listen(PORT,  () => { 
    
    DbConnect();
    console.log(`Live on http://localhost:${PORT}`) })