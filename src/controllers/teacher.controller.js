const teacherService = require("../services/teacher.service");

/*
 Teacher Controllers
 Handles incoming teacher-related requests
*/

async function createTeacher(req, res) {
  try {
    const teacher = await teacherService.createTeacher(req.body);

    res.status(201).json({
      success: true,
      message: "Teacher created successfully",
      data: teacher,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

async function getTeachers(req, res) {
  try {
    const teachers = await teacherService.getTeachers();

    res.status(200).json({
      success: true,
      data: teachers,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

async function getTeacherById(req, res) {
  try {
    const teacher = await teacherService.getTeacherById(req.params.id);

    res.status(200).json({
      success: true,
      data: teacher,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
}

async function updateTeacher(req, res) {
  try {
    const updatedTeacher = await teacherService.updateTeacher(
      req.params.id,
      req.body,
    );

    res.status(200).json({
      success: true,
      message: "Teacher updated successfully",
      data: updatedTeacher,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

async function deleteTeacher(req, res) {
  try {
    await teacherService.deleteTeacher(req.params.id);

    res.status(200).json({
      success: true,
      message: "Teacher deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = {
  createTeacher,
  getTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
};
