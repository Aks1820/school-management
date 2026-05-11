const teacherModel = require("../models/teacher.model");

/*
 Teacher Services
 Handles all teacher-related database operations
*/

async function createTeacher(data) {
  // Check if teacher already exists
  const existingTeacher = await teacherModel.findOne({
    email: data.email,
  });

  if (existingTeacher) {
    throw new Error("Teacher already exists");
  }

  // Create new teacher
  const teacher = await teacherModel.create(data);

  return teacher;
}

async function getTeachers() {
  const teachers = await teacherModel.find();

  return teachers;
}

async function getTeacherById(id) {
  const teacher = await teacherModel.findById(id);

  if (!teacher) {
    throw new Error("Teacher not found");
  }

  return teacher;
}

async function updateTeacher(id, data) {
  const teacher = await teacherModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  if (!teacher) {
    throw new Error("Teacher not found");
  }

  return teacher;
}

async function deleteTeacher(id) {
  const teacher = await teacherModel.findByIdAndDelete(id);

  if (!teacher) {
    throw new Error("Teacher not found");
  }

  return teacher;
}

module.exports = {
  createTeacher,
  getTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
};
