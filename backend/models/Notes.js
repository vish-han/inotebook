const mongoose = require("mongoose");
const { Schema } = mongoose;

const noteSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
  },
  title: {
    type: String,
    require: true,
  },
  description: { required: true, type: String },
  tag: { type: String, default: "General" },
  date: { required: true, type: Date, default: Date.now },
});

module.exports = mongoose.model("notes", noteSchema);
