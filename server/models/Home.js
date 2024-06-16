// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const HomeSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
//   coordinates: {
//     type: [Number],
//     required: true,
//   },
// });

// module.exports = mongoose.model("Home", HomeSchema);
// -----------------------------------------------------------------

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HomeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

module.exports = mongoose.model("Home", HomeSchema);
