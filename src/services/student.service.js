const studentModel = require("../models/student.model");

/*
 Student Services
 Handles all student-related database operations
*/

async function createStudent(data) {
  // Check if student already exists
  const existingStudent = await studentModel.findOne({
    email: data.email,
  });

  if (existingStudent) {
    throw new Error("Student already exists");
  }

  // Create new student
  const student = await studentModel.create(data);

  return student;
}

async function getStudents() {
  const students = await studentModel.find();

  return students;
}

async function getStudentById(id) {
  const student = await studentModel.findById(id);

  if (!student) {
    throw new Error("Student not found");
  }

  return student;
}

async function updateStudent(id, data) {
  const student = await studentModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  if (!student) {
    throw new Error("Student not found");
  }

  return student;
}

async function deleteStudent(id) {
  const student = await studentModel.findByIdAndDelete(id);

  if (!student) {
    throw new Error("Student not found");
  }

  return student;
}

module.exports = {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
