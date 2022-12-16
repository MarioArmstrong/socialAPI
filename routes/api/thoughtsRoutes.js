const router = require("express").Router();

const {
  getAllThoughts,
  getSingleThoughts,
  createThoughts,
  updateThoughts,
  deleteSingleThoughts,
  addReactions,
  deleteReactions,
} = require("../../controllers/thoughtsController");

router.route("/").get(getAllThoughts).post(createThoughts);

router
  .route("/:thoughtsId")
  .get(getSingleThoughts)
  .put(updateThoughts)
  .delete(deleteSingleThoughts);

router.route("/:thoughtsId/reactions").post(addReactions);

router.route("/:thoughtsId/reactions/:reactionsId").delete(deleteReactions);

module.exports = router;
