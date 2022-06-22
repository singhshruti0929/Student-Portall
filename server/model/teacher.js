const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacherSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },

    gender: {
      type: String,
      require: true,
    },
    subject: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const teacherModel = mongoose.model("teachers", teacherSchema);

module.exports = teacherModel;
