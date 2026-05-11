const mongoose = require("mongoose");

/*
 Teacher Schema
 Stores all teacher-related information
*/

const teacherSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
    },

    subject: {
      type: String,
      required: [true, "Subject is required"],
      trim: true,
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },

    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: [true, "Gender is required"],
    },

    age: {
      type: Number,
      required: [true, "Age is required"],
    },
  },
  {
    timestamps: true,
  },
);

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
