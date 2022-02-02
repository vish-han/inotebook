const mongoose = require("mongoose");
const stringURL =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const connectToMongoose = () => {
  mongoose.connect(stringURL, () => {
    console.log("connect to mongo successfully");
  });
};
module.exports = connectToMongoose;
