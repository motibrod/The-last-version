const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const Joi = require("joi");

const giftSchema = new Schema({
  name: { type: String },
  phone: { type: Number, require: true },
  blessing: { type: String },
  amount: { type: Number, require: true },
  userid_gift: { type: String },
  toEventId: { type: String },
  toEventName: { type: String },
  entryDate: { type: Date, default: Date.now },
});

// giftSchema.method.generateAuthToken = function () {
//     const token = jwt.sign({_id:this._id}, process.env.DB_URI)
// }

const giftModel = mongoose.model("gift", giftSchema);

module.exports = { giftModel };
