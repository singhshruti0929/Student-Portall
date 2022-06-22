const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    rollNo: {
      type: Number,
      required: true,
    },

    gender: {
      type: String,
      require: true,
    },
    class: {
      type: String,
      required: true,
    },
    subject: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

const studentModel = mongoose.model("students", studentSchema);

module.exports = studentModel;
