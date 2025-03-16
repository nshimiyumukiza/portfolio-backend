const express = require("express")
const mongoose =require("mongoose")
const userRouter = require("./routers/userRouter.js")
const cors = require("cors")
const  dotenv = require("dotenv")

dotenv.config();

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use("/user",userRouter)

app.get("/",(req,res)=>{
    res.send("hi erneste")
})
const port = process.env.PORT || 4500;
const db = process.env.DATABASE

mongoose.connect(db)
.then(()=>{
    console.log("connection to database")

    app.listen("4500",()=>{
        console.log(`port running on ${port}`)
    })
})
.catch((err)=>{
    console.log(`error is ${err}`)
})
