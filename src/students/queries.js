const getStudentsQuery = "SELECT * FROM students";
const getStudentsByIdQuery = "SELECT * FROM students WHERE  id = $1";
const checkEmailExistsQuery = "SELECT * FROM students WHERE email = $1";
const addStudentQuery =
  "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4) RETURNING *";

module.exports = {
  getStudentsQuery,
  getStudentsByIdQuery,
  addStudentQuery,
  checkEmailExistsQuery,
};