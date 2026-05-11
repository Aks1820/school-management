const attendanceService = require("../services/attendance.service");

/*
 Attendance Controllers
 Handles incoming attendance-related requests
*/

async function createAttendance(req, res) {
  try {
    const attendance = await attendanceService.createAttendance(req.body);

    res.status(201).json({
      success: true,
      message: "Attendance created successfully",
      data: attendance,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

async function getAttendance(req, res) {
  try {
    const attendance = await attendanceService.getAttendance();

    res.status(200).json({
      success: true,
      data: attendance,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function getAttendanceByStudent(req, res) {
  try {
    const attendance = await attendanceService.getAttendanceByStudent(
      req.params.studentId,
    );

    res.status(200).json({
      success: true,
      data: attendance,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function getAttendancePercentage(req, res) {
  try {
    const percentage = await attendanceService.getAttendancePercentage(
      req.params.studentId,
    );

    res.status(200).json({
      success: true,
      attendancePercentage: percentage,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = {
  createAttendance,
  getAttendance,
  getAttendanceByStudent,
  getAttendancePercentage,
};
