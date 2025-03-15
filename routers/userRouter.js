const { get } = require("mongoose")
const{postUser,getUser,getOneUser, deleteOneUser,sendEmail} = require("../models/controllers/user.controller")
 const{empty,userExit} = require("../middleware/datacheker")
const express =require("express")

const router = express.Router()

router.post("/",empty,userExit,sendEmail)
router.get("/",getUser)
router.get("/:id",getOneUser)
router.delete("/:id",deleteOneUser)

module.exports = router 