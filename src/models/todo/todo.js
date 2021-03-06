const mongoose = require("mongoose");

const todo = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: { status: "in-progress" },
  },
});

module.exports = mongoose.model("Todo", todo);
