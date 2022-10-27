const { Schema, Types } = require("mongoose");

const formattedDate = function(Date){
    return Date.toLocaleString('EN-us');
    };

const reactionsSchema = new Schema(
    reactionsId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),  
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        requiredL true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formattedDate,
    },
    {
        timestamps: true,
        toJSON: {
          getters: true,
          virtuals: true,
        },
        id: false,
      }
);

module.exports = reactionsSchema;