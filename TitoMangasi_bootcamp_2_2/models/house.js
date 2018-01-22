const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/house", { useMongoClient : true });

const Schema = mongoose.Schema;

const houseSchema = new Schema({
    house_name : String,
    house_address : String
});

const House = mongoose.model("user", houseSchema);

module.exports = House;