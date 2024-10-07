const eventController = require("../DL/controllers/eventController");
const userControler = require("../DL/controllers/userController");

module.exports.addevent = async (eventFields) => {
  if (
    eventFields.NameOfGroom === "" ||
    eventFields.NameOfBride === "" ||
    eventFields.NameOfManager === "" ||
    eventFields.TypeOfEvent === "" ||
    eventFields.NumOfGuests === "" ||
    eventFields.phone === "" ||
    eventFields.DateOfEvent === ""
  )
    throw { code: 400, message: "missing data" };
  const newEvent = await eventController.create(eventFields);
    await userControler.update(
      { _id: eventFields.userid_event },
      { $push: { eventId: newEvent._id } }
    );

};
