const mongoose = require("mongoose");

/*
 Student Schema
 Stores all student-related information
*/

const studentSchema = new mongoose.Schema(
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

    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },

    course: {
      type: String,
      required: [true, "Course is required"],
      trim: true,
    },

    age: {
      type: Number,
      required: [true, "Age is required"],
    },

    gender: {
      type: String,
      required: [true, "Gender is required"],
      enum: ["male", "female", "other"],
    },
  },
  {
    timestamps: true,
  },
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
