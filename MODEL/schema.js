const mongoose = require("mongoose")
const DB = require("../controllers/data")

const praticethree = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    Address: { type: String },
},
    {
        typestamp: true
    })

const sharing = DB.model("praticethree", praticethree)
module.exports = sharing