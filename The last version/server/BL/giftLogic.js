const giftController = require("../DL/controllers/giftController");
const jwtFn = require("../middlewere/jwt");
const bcrypt = require("bcryptjs");
const userControler = require("../DL/controllers/userController");
const eventControler = require("../DL/controllers/eventController");

module.exports.addgift = async (giftFields) => {
  if (!giftFields.phone || !giftFields.amount)
    throw { code: 400, message: "missing phone number or amount" };
  let newGift;
  try {
    newGift = await giftController.creat(giftFields);
  } catch (error) {
    console.log("error in gift logic 1:", error);
  }
  try {
    await userControler.update(
      { _id: giftFields.userid_gift },
      { $push: { giftsId: newGift._id } }
    );
  } catch (error) {
    console.log("error in gift logic 2:", error);
  }
  try {
    await eventControler.update(
      { _id: giftFields.toEventId },
      { $push: { giftsId: newGift._id } }
    );
  } catch (error) {
    console.log("error in gift logic 3:", error);
  }
};

module.exports.addgiftG = async (giftFields) => {
  if (!giftFields.phone || !giftFields.amount)
    throw { code: 400, message: "missing phone number or amount" };
  let newGift;
  try {
    newGift = await giftController.creat(giftFields);
  } catch (error) {
    console.log("error in gift logic 1:", error);
  }  
};


module.exports.getgift = async (giftsId) => {
  let giftId = Object.values(giftsId);
  giftId = giftId[0];
  let gift = [];
  for (let index = 0; index < giftId.length; index++) {
    const element = giftId[index];
    gift.push(await giftController.readById(element));
  }
  return gift;
};
