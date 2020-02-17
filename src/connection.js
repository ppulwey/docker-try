// connection.js
const mongoose = require("mongoose");
const User = require("./user.model");
const connection = "mongodb://mongo:27017/pubtalk";
const connectDb = () => {
  return mongoose.connect(connection);
};
module.exports = connectDb;
