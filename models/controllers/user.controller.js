const User = require("../user.models");
const nodemailer = require("nodemailer")

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

// sending email

const sendEmail = async(req, res) => {
    const {name,email,message} = req.body;
    const transiporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }

    })
    let mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: `new message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
    }
    try {
        await transiporter.sendMail(mailOptions);
        res.status(200).json({message:"Message sent successfully!"})
        
    } catch (error) {
        console.error(error);
        res.status(500).json({error:"failed to send message"})
        
    }

}

module.exports = {postUser,getUser,getOneUser,deleteOneUser,sendEmail}