const userController = require("../DL/controllers/userController");
const jwtFn = require("../middlewere/jwt");
const bcrypt = require("bcryptjs");

async function getGiftsById(userId) {
  const arrGifts = await userController.readOne({ ObjectId: userId });
  console.log("arrgifts in user Logic:", arrGifts);
  return { arrGifts: arrGifts };
}

async function getIdByEmail(email) {
  const userid = await userController.read({ email: email });
  if (!userid) throw { code: 401, message: "getIdByEmail error" };
  return { userid: userid };
}

async function login(loginData) {
  const email = loginData.email;
  const user = await userController.readOne({ email: email });
  if (!email) throw { code: 401, message: "missing data" };
  if (!user) throw { code: 401, message: "not exist" };
  if (user.email !== email) throw { code: 401, message: "unauthorized" };

  const password = loginData.password;
  user = await userController.readOne({ password: password });
  console.log(password);
  if (user.password !== password) console.log(password); // throw { code: 401, massage: "password not courect" };
  const token = jwtFn.createToken(user._id);
  return { token: token };
}
//TODO: hash password

module.exports = { login, getIdByEmail, getGiftsById };

module.exports.getAllUsers = async () => {
  const users = await userController.read({});
  if (users.length === 0) throw { code: 400, message: "there is no users" };

  userController.read({});
};
exports.getUserDetailsById = (id) => {
  userController.read({ _id: id });
};

exports.createUser = (userFields) => {
  if (userFields.length === 0)
    throw { code: 400, message: "there is no user fields" };
  userController.create(userFields);
};

exports.updateUser = (filter, newData) => {
  if (!newData) throw { code: 400, message: "there is no new data" };
  userController.update(filter, newData);
};

// exports.register = async(userFields) => {
//     if(!userFields) throw ({code:400, message:"this email is already in use"})
//       userController.create(userFields)
// }

module.exports.register = async (userFields) => {
  const email = userFields.email;
  if (
    !userFields.email ||
    !userFields.password ||
    !userFields.fname ||
    !userFields.lname
  )
    throw { code: 400, message: "missing data" };

  const existUser = await userController.readOne({ email });
  if (existUser) throw { code: 405, message: "duplicated email" };

  // userController.create(userFields)
  // const salt= await bcrypt.genSalt();
  // const hashedPassword=await bcrypt.hash(password, salt);
  // userFields.salt=salt;
  // userFields.hashedPassword=hashedPassword;

  const user = await userController.create(userFields);
  const token = jwtFn.createToken(user._id);

  return { token: token, user: user };
};
