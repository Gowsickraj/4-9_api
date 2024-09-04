const mongoose = require("mongoose")

const DB = () => {

    let dbURL = mongoose.createConnection(process.env.MONGOOSE_URL)
    return dbURL
}
module.exports = DB()