const express = require("express");
const router = express.Router();
const { User } = require("../DL/models/users");
const bcrypt = require("bcryptjs");
const userControler = require("../DL/controllers/userController")
const userLogic = require('../BL/userLogic');
const auth = require('../middlewere/auth');



router.post('/login', async (req, res) => {

  try {
      const token = await userLogic.login(req.body)
      res.send({ token: token })
  }
  catch (err) {
      console.log(err.message);
      res.send(err.message);
  }
})


router.post('/register', async (req, res) => {
  try {
      const newUser = await userLogic.register(req.body)
      res.send(newUser)
  } catch (err) {
      console.log(err, "register error");
  }
})

router.post('/userid', async (req, res) => {

    const userid  = await userLogic.getIdByEmail(req.body.email);
    res.send(userid);
})

router.get('/', async (req, res) => {
  try {
      console.log(req);
      
      const users = await userLogic.getAllUsers();
      res.send(users);
  }
  catch (err) {
      if (err) {
          console.log(err);
          res.status(500).send({ message: "somthing went wrong" })
      }
  }
})

router.post('/giftsById', async (req, res) => {
    const arrGifts  = await userLogic.getGiftsById(req.body);
    console.log("arrgifts in user Routes:", arrGifts);
    res.send(arrGifts);
})






module.exports = router;
