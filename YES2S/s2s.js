const { default: axios } = require("axios")
const sharing = require("../MODEL/schema")

const yestoyes = async (req, res) => {
  let { firstName, lastName, Address } = req.body
  try {
    const datas = await sharing.create({
      firstName: firstName,
      lastName: lastName,
      Address: Address,
    })
    if (datas) {
      // axios.post('http://localhost:5001/postmethod', req.body)
      //   .then((resp) => {
      //     console.log(resp);

      //   })
      console.log(datas);
      res.status(200).json({ msg: "Updated Sucessfully..." })
    }
  }
  catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal Server Error" })
  }
}
module.exports = yestoyes


