const mongoose = require("mongoose");

const pdfSchema = mongoose.Schema({
    fileName:String,
    originName:String,
    uploadDate: {
        type: Date,
        default: Date.now,
      },
})

const Pdf = mongoose.model("Pdf",pdfSchema);

module.exports = Pdf