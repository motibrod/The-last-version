const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fname: { type: String, require: true },
  lname: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  entryDate: { type: Date, default: Date.now },
  giftsId: [String],
  eventId: [String]
});

const userModel = mongoose.model("user", userSchema);

module.exports = { userModel };