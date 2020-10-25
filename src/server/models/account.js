const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    pastPosition: {
      type: String,
      required: false,
    },
    homeOwner: {
      type: Boolean,
      required: true,
    },
    timeframe: {
      type: Number,
      required: true,
    },
    brigg: {
      type: String,
      required: true,
    },
    foodStamps: {
      type: Boolean,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    hash: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = accountSchema;
