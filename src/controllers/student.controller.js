const studentService = require("../services/student.service");

/*
 Student Controllers
 Handles incoming student-related requests
*/

async function createStudent(req, res) {
  try {
    const student = await studentService.createStudent(req.body);

    res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: student,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

async function getStudents(req, res) {
  try {
    const students = await studentService.getStudents();

    res.status(200).json({
      success: true,
      data: students,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

async function getStudentById(req, res) {
  try {
    const student = await studentService.getStudentById(req.params.id);

    res.status(200).json({
      success: true,
      data: student,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
}

async function updateStudent(req, res) {
  try {
    const updatedStudent = await studentService.updateStudent(
      req.params.id,
      req.body,
    );

    res.status(200).json({
      success: true,
      message: "Student updated successfully",
      data: updatedStudent,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

async function deleteStudent(req, res) {
  try {
    await studentService.deleteStudent(req.params.id);

    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
