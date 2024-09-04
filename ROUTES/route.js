const UpdateDB = require("../CRUD/Updatedb");
const deleteDB = require("../CRUD/delete");
const findDB = require("../CRUD/findDB");
const Updated = require("../CRUD/findDB");
const yestoyes = require("../YES2S/s2s");

const route = require("express").Router();

route.post("/api", findDB);
route.put("/api/:id",UpdateDB)
route.delete("/api/:id",deleteDB)

//---Data showing in datas---//
route.post("/data/post",yestoyes)

module.exports = route;