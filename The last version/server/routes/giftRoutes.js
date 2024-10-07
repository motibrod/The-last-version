const express = require("express");
const router = express.Router();
const giftLogic = require("../BL/giftLogic");
const auth = require("../middlewere/auth");

router.post("/addGift", async (req, res) => {
  if (req.body.userid_gift) {
    try {
      giftLogic.addgift(req.body);
    } catch (error) {
      console.log("giftRaoutes error 1", error);
    }
  } else {
    try {
      giftLogic.addgiftG(req.body);
    } catch (error) {
      console.log("giftRaoutes error 2", error);
    }
  }
  
});

router.post("/getgift", async (req, res) => {
  res.send(await giftLogic.getgift(req.body));
});

module.exports = router;
