const attendanceModel = require("../models/attendance.model");

/*
 Attendance Services
 Handles all attendance-related database operations
*/

async function createAttendance(data) {
  const attendance = await attendanceModel.create(data);

  return attendance;
}

async function getAttendance() {
  const attendance = await attendanceModel
    .find()
    .populate("student")
    .populate("teacher");

  return attendance;
}

async function getAttendanceByStudent(studentId) {
  const attendance = await attendanceModel
    .find({
      student: studentId,
    })
    .populate("student")
    .populate("teacher");

  return attendance;
}

async function getAttendancePercentage(studentId) {
  const attendance = await attendanceModel.find({
    student: studentId,
  });

  const totalAttendance = attendance.length;

  const presentAttendance = attendance.filter(
    (item) => item.status === "present",
  ).length;

  const attendancePercentage =
    totalAttendance === 0 ? 0 : (presentAttendance / totalAttendance) * 100;

  return Number(attendancePercentage.toFixed(2));
}

module.exports = {
  createAttendance,
  getAttendance,
  getAttendanceByStudent,
  getAttendancePercentage,
};
