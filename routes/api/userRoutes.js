const router = require("express").Router();

const {
  getAllUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  createNewFriends,
  deleteNewFriends,
} = require("../../controllers/userController");

router.route("/").get(getAllUser).post(createUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

router
  .route("/:userId/friends/:friendsId")
  .post(createNewFriends)
  .delete(deleteNewFriends);

module.exports = router;
