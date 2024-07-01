const getStudentsQuery = "SELECT * FROM students";
const getStudentsByIdQuery = "SELECT * FROM students WHERE  id = $1";
const checkEmailExistsQuery = "SELECT * FROM students WHERE email = $1";
const addStudentQuery =
  "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4) RETURNING *";
const deleteStudentQuery = "DELETE FROM students WHERE id = $1";
//const updateStudentQuery = "update students SET name = $1, email = $2, age = $3, dob = $4 WHERE id = $5";
const updateStudentQuery =
  "update students SET name = $1 WHERE id = $2";

module.exports = {
  getStudentsQuery,
  getStudentsByIdQuery,
  addStudentQuery,
  checkEmailExistsQuery,
  deleteStudentQuery,
  updateStudentQuery,
};