const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  features: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Data", DataSchema);
