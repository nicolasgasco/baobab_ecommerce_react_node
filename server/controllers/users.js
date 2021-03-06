// Initializing users
const { User } = require("../models/users");

const { encryptPassword } = require("../middleware/encryptPassword");

require("express-async-errors");

const getAllUsers = async (req, res) => {
  // Query param for sorting, by which and in which order
  let sortBy = req.query.sortBy;
  const order = req.query.order;

  // You can add a - in front of key for descending order
  sortBy = order === "-1" ? "-" + sortBy : sortBy;

  // Database request
  const users = await User.find().sort(sortBy);

  if (users.length === 0)
    return res.status(404).send({ error: "Nothing found" });

  sortBy = sortBy ? sortBy.replace("-", "") : null;
  res.send({
    resultsFound: users.length,
    sortBy: sortBy ? sortBy.replace("-", "") : undefined,
    order: order === "1" || order === "-1" ? order : undefined,
    results: users,
  });
};

const getUserById = async (req, res) => {
  // Id validated by middleware
  const id = req.params.id;

  // Populating department name from another table, with name and without id
  const user = await User.findById(id);

  if (!user) {
    return res.status(404).send({ error: "Nothing found" });
  }

  res.send({
    resultsFound: 1,
    result: user,
  });
};

const postNewUser = async (req, res) => {
  // First round of validation with Joi (middleware)
  console.log("Joi validation successful");

  // Encrypt password now and not before (middleware), otherwise it cannot be validated
  req.body.password = encryptPassword(req.body.password);

  // Creating new mongoose user with body
  const user = new User(req.body);

  // Second round of validation with Mongoose
  await user.validate();
  console.log("Mongoose validation successful");

  // Saving in DB and sending result
  const result = await user.save();

  // User will be authorized automatically
  const token = user.generateAuthToken();
  res.header("x-auth-token", token).send({ insertedCount: 1, result: result });
};

const putUserWithId = async (req, res) => {
  // Add a modification date
  req.body.modificationDate = new Date();

  const updatedUser = new User(req.body);

  const token = updatedUser.generateAuthToken();
  // Without this it's a 500 error
  try {
    // Validation with Mongoose
    await updatedUser.validate();
  } catch (err) {
    return res
      .header("x-auth-token", token)
      .status(400)
      .send({
        error: Object.values(err.errors)
          .map((error) => {
            return error.message;
          })
          .join(", "),
      });
  }

  // This was causing an issue with loggin in after modifying data
  // req.body.password = updatedUser.password
  //   ? encryptPassword(req.body.password)
  //   : null;

  // Finding and updating at the same time
  const result = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!result) {
    return res
      .header("x-auth-token", token)
      .status(404)
      .send({ error: "Nothing found" });
  }
  res
    .header("x-auth-token", token)
    .send({ updatedCount: 1, updatedObj: result });
};

const patchPassword = async (req, res) => {
  // Add a modification date
  req.body.modificationDate = new Date();

  const newPassword = encryptPassword(req.body.password);

  try {
    const result = await User.updateOne(
      {
        _id: req.params.id,
      },
      {
        $set: { password: newPassword },
      }
    );

    console.log(result);

    if (!result.nModified) {
      throw new Error("Something went wrong");
    }
    res
      // .header("x-auth-token", token)
      .send({ updatedCount: result.nModified });
  } catch (error) {
    res
      // .header("x-auth-token", token)
      .status(404)
      .send({ error: `${error}` });
  }
};

const deleteUser = async (req, res) => {
  const result = await User.deleteOne({ _id: req.params.id });

  if (result.deletedCount === 0) {
    res.status(404).send({ error: "User not found" });
    return;
  }
  res.send({ deletedCount: 1, result: result });
};

exports.getAllUsers = getAllUsers;

exports.getUserById = getUserById;
exports.postNewUser = postNewUser;
exports.putUserWithId = putUserWithId;
exports.deleteUser = deleteUser;
exports.patchPassword = patchPassword;
