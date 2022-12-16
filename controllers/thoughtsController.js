const { Thoughts, User } = require("../models");

module.exports = {
  //GET all Thoughts
  getAllThoughts(req, res) {
    Thoughts.find()
      .then((thoughts) => res.status(200).json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  //GET single Thoughts
  getSingleThoughts(req, res) {
    Thoughts.findOne({ _id: req.params.thoughtsId })
      .select("-__v")
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },

  //POST new Thoughts
  createThoughts(req, res) {
    Thoughts.create(req.body)
      .then((thoughts) => res.json(thoughts))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  //Update Thoughts aka PUT
  updateThoughts(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtsId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: "No thoughts with this id!" })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },

  //DELETE Thoughts
  deleteSingleThoughts(req, res) {
    Thoughts.findOneAndDelete({ _id: req.params.thoughtsId })
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: "No thoughts with that ID" })
          : User.deleteMany({ _id: { $in: thoughts.user } })
      )
      .then(() => res.json({ message: "Thoughts and User deleted!" }))
      .catch((err) => res.status(500).json(err));
  },

  //POST new Reactions
  addReactions(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtsId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    ).then((thoughts) =>
      !thoughts
        ? res.status(404).json({ message: "No thought with this ID!" })
        : res.json(thoughts).catch((err) => res.status(500).json(err))
    );
  },

  //DELETE Reactions
  deleteReactions(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtsId },
      { $pull: { friends: req.params.reactionId } },
      { runValidators: true, new: true }
    )
      .then((thoughts) =>
        !thoughts
          ? res
              .status(404)
              .json({ message: "Error, reactionId does not exist!" })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },
};
