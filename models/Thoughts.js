const { Schema, Types } = require("mongoose");

const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      ref: "User",
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = thoughtsSchema;
