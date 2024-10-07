const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  NameOfGroom: { type: String, require: true },
  NameOfBride: { type: String, require: true },
  NameOfManager: { type: String, require: true },
  TypeOfEvent: { type: String, require: true },
  NumOfGuests: { type: Number, require: true },
  phone: { type: Number, require: true },
  userid_event: { type: String },
  DateOfEvent: { type: Date, require: true },
  giftsId: [String],
  
});

const eventModel = mongoose.model("event", eventSchema);

module.exports = { eventModel };
