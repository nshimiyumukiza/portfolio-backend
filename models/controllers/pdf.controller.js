const path = require("path");
const fs = require("fs");
const Pdf = require("../pdf.modal");

const uploadPdf = async (req, res ) => {
    if(! req.file) return res.status(400).send("no file uploaded");

    const newPdf = new Pdf ({
        fileName: req.file.filename,     
    originalName: req.file.originalname, 
    filePath: req.file.path,  
    })
    await newPdf.save();
    res.status(201).json({message: "pdf aploaded", data:newPdf})
}


const getAllPdf = async (req, res ) => {
    const files = await Pdf.find().sort({uploadDate : -1});
    res.json(files)
}

const downloadFile = async (req, res ) => {
    const pdf = await Pdf.findById(req.params.id);
    if(!pdf) return res.status(404).send("file not found");

    const filePath = path.join(__dirname, "..", "..", "uploads", pdf.fileName);

    

    res.download(filePath, pdf.originName)
}

module.exports = {uploadPdf, getAllPdf, downloadFile}