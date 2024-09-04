const sharing = require("../MODEL/schema")

const UpdateDB = async (req, res) => {
    try {
        const id = req.params.id
        const Update = req.body
        const result = await sharing.findByIdAndUpdate(id, Update, { new: true })
        console.log(result);
        res.json(result)
        if (result) {
            console.log(result, "Message Updated..............");
            res.status(200).json({ Msg: "Message Updated Sucessfully..........." })
        }
    }
    catch (err) {
        res.status(500).json({ Msg: "Updated Message was Roung..." })
    }
}

module.exports = UpdateDB
