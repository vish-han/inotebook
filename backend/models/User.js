const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  password: { required: true, type: String },
  email: { required: true, type: String },
  date: { required: true, type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);
