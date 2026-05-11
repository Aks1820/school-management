const mongoose = require("mongoose");

/*
 Attendance Schema
 Stores student attendance records
*/

const attendanceSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: [true, "Student is required"],
    },

    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
      required: [true, "Teacher is required"],
    },

    date: {
      type: Date,
      required: [true, "Date is required"],
    },

    status: {
      type: String,
      enum: ["present", "absent"],
      required: [true, "Attendance status is required"],
    },
  },
  {
    timestamps: true,
  },
);

const Attendance = mongoose.model("Attendance", attendanceSchema);

module.exports = Attendance;
