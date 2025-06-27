const express = require("express");
const { Error } = require("mongoose");
const multer = require("multer");
const path = require("path");
const { uploadPdf, getAllPdf, downloadFile } = require("../models/controllers/pdf.controller");

const router = express.Router();

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)) // unique file name
    }
})

const upload = multer({
    storage,
    limits: {fieldNameSize:10 *1024 * 1024}, //10MB
    fileFilter: (req, file, cb) => {
        if(file.mimetype === "application/pdf") cb(null, true);
        else cb( new Error("only pdf file are allowed"),false)
    }
})

router.post("/upload", upload.single("pdf"),uploadPdf);
router.get("/",getAllPdf);
router.get("/download/:id",downloadFile)

module.exports = router;



