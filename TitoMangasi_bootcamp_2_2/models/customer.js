const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/customer", { useMongoClient : true });

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    customer_name : String,
    customer_address : String,
});

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;