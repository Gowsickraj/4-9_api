const sharing = require("../MODEL/schema")

const deleteDB = async (req, res) => {

    try {
        const id = req.params.id
        const deletedb = await sharing.findByIdAndDelete(id)
        // res.json(deletedb)
        if (deletedb) {
            return (res.json(deleteDB)).status(200).json({ msg: ' Updated Message is deleted...' })
        }
    } catch (err) {
        res.status(500).json({ msg: 'Message not deleted...' })
    }
}
module.exports = deleteDB;