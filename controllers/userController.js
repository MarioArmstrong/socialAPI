const { ObjectId } = require("mongoose").Types;
const { User, Thoughts } = require("../models");

module.exports = {
  //GET all User
  async getAllUser(req, res) {
    try {
      const users = await User.find();
      const userObj = {
        users,
      };
      return res.json(userObj);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  //GET single User
  async getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json({ student })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  //CREATE new User aka PUT
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  //UPDATE User aka PUT
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((course) =>
        !course
          ? res.status(404).json({ message: "No user with this id!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  //DELETE User
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) => {
        !user
          ? res.status(404).json({ message: "No such user exists" })
          : res.status(200).json({ message: "User was deleted" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  //POST newFriend

  //DELETE newFriend
};
