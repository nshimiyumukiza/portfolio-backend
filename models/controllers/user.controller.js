const User = require("../user.models")

// post user

const postUser = async(req,res)=>{
    try{
const user = await User.create(req.body)
res.status(200).json({message:"message sent",data:user})
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}


// get user

const getUser = async(req,res)=>{
   try{
    const user = await User.find({})
    res.status(200).json(user)
   }
   catch(err){
    res.status(500).json({message:err.message})
   }
}

// get user by id

const getOneUser = async(req,res)=>{
    try{
        const {id} = req.params
        const user = await User.findById(id)
        res.status(200).json(user)

    }
    catch{
        res.status(404).json({message:"user not found"})
    }
}


// delete user by id

const deleteOneUser = async(req,res)=>{
    try{
const {id} = req.params
const user = await User.findByIdAndDelete(id)
res.status(200).json({message:"user deleted"})
    }
    catch{
        res.status(404).json({massage:"user not found"})
    }
}

module.exports = {postUser,getUser,getOneUser,deleteOneUser}