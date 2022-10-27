const { ObjectId } = require("mongoose").Types;
const { User } = require("../models");

module.exports = {
    getAllUser(req,res) {
        try{
            User.find()
            .then(async(users) => {
                const userObj = {
                    users 
                };
                return res.json(userObj);
            })
        }catch(err){
            console.log(err);
            return res.status(500).json(err);
        };
    },

    getSingleUser(req,res) {
        try{
        User.findOne({_id: req.params.userId})
            .select("-__v")
                .then(async(user) =>{
               if(!user) {
                res.status(404).json({message: "No user with that ID"})
               } else {
                res.json({student})
               }
            }}catch(err){
                console.log(err);
                return res.status(500).json(err);
                }
    },

    createUser(req, res) {
        User.create(req.body)
          .then((user) => res.json(user))
          .catch((err) => res.status(500).json(err));
      },

      deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
          .then((user) =>
            if(!user){
            res.status(404).json({ message: "No such user exists" })
            }else{
                return res.json({message: "User was deleted"});
            }
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },
}