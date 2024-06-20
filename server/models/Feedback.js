const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Feedback", FeedbackSchema);
