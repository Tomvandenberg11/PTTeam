const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    study: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    interests: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true },
);

const user = mongoose.model('user', userSchema);
module.exports = user;
