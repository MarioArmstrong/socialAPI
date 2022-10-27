const { Schema, Types } = require("mongoose");
const reactionsSchema = require("./Reactions")

const formattedDate = function(Date){
return Date.toLocaleString('EN-us');
};

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
      get: formattedDate,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionsSchema],
  {
    timestamps: true,
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

thoughtsSchema.virtual("reactionCount").get(function(){
  return this.reactions.length;
});

const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;
