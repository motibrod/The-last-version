const express = require('express')
const router = express.Router()


const giftRouter = require('./giftRoutes')
const usersRouter = require('./usersRoutes')
const eventRouter = require('./evnetRoutes')

router.use("/gift", giftRouter);
router.use("/users", usersRouter);
router.use("/event", eventRouter);

module.exports = router;
