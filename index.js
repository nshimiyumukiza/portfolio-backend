const express = require("express")
const mongoose =require("mongoose")
const userRouter = require("../portfolio-backend/routers/userRouter")
const cors = require("cors")


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use("/user",userRouter)

app.get("/",(req,res)=>{
    res.send("hi erneste")
})

mongoose.connect("mongodb+srv://nshimiyumukizaerneste99:k3PxzuMOxQCLaqQb@cluster0.uealx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to DataBase")

    app.listen("4500",()=>{
        console.log("port running...")
    })
})
.catch((err)=>{
    console.log(`error is ${err}`)
})
