const router = require("express").Router();

const {
  getAllUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../userController");

router.route("/").get(getAllUser).post(createUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
