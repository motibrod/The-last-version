const express = require("express");
const router = express.Router();
const events = require("../DL/models/events");
const eventLogic = require("../BL/eventLogic");
const auth = require("../middlewere/auth");

router.post("/addEvent", async (req, res) => {
  const eventDetails = eventLogic.addevent(req.body);
});

module.exports = router;
