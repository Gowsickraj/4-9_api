const express = require("express")
require("dotenv").config()

const route = require("./ROUTES/route")

const app = express()
const node = require("node-rsa")

const cors =require("cors")


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/",route)





app.listen(process.env.PORT,()=>{
    console.log(`Server is Running on http://localhost:${process.env.PORT}`);
})