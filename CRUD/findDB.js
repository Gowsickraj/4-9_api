const sharing = require("../MODEL/schema")

const findDB = async (req, res) => {
    let { Name, Lname } = req.body

    try {
        const fndMethod = await sharing.find({
            firstName: Name,
            lastName: Lname
        })
        if (fndMethod) {
            console.log(fndMethod, "Rinning....");
            return res.status(200).json({ Msg: "Message finded....", data: fndMethod })
        }
    } catch (err) {
        return res.status(500).json({ msg: "Message not find.." });
    }
}
module.exports = findDB
//how to remove the url link in visual stdio and new link