const pool = require('../../db');
const {
  getStudentsQuery,
  getStudentsByIdQuery,
  addStudentQuery,
  checkEmailExistsQuery,
  deleteStudentQuery,
  updateStudentQuery,
} = require("../students/queries");

const getStudents = (req, res, next) =>{
            pool.query(getStudentsQuery, (err, result) => {
              if (err) {
                console.error(err);
                return res.status(500).send("Server Error");
              }
              res.status(200).json(result.rows);
            });
}

const getStudentsById = (req, res, next) => {
            const id  = parseInt(req.params.id, 10);
            if (isNaN(id)) {
              return res.status(400).send("Invalid ID");
            }
            pool.query(getStudentsByIdQuery, [id], (err, result) => {
                        if (err) {
                                    console.error(err);
                                    return res.status(500).send("Server Error");
                        }
                        if (result.rows.length === 0) {
                                    return res.status(404).send("Student not found");
                        }
                        res.status(200).json(result.rows[0]);
            });
};

const addStudent = (req, res) => {
            const { name, email, age, dob } = req.body;
            if (!name || !age || !dob || !age) {
              return res.status(400).send("Missing required fields");
            }

            //check if email exists
            pool.query(checkEmailExistsQuery, [email], (err, result) => {
              if (err) {
                console.error(err);
                return res.status(500).send("Server Error");
              }
              if (result.rows.length > 0) {
                return res.status(409).send("Email already exists");
              }
            });

            //add Students to database
            pool.query(
              addStudentQuery,
              [name, email, age, dob],
              (err, result) => {
                if (err) {
                  console.error(err);
                  return res.status(500).send("Server Error");
                }
                res.status(201).json(result.rows[0]);
              }
            );
}

const deleteStudent = (req, res) => {
            const id = parseInt(req.params.id, 10);
            if (isNaN(id)) {
                        return res.status(400).send("Invalid ID");
            }
            pool.query(deleteStudentQuery, [id], (err, result) => {
              if (err) {
                console.error(err);
                return res.status(500).send("Server Error");
              }
              if (result.rowCount === 0) {
                return res.status(404).send("Student not found");
              }
              res.status(200).json("Student deleted successfully.");
            });
}

const updateStudent = (req, res) => {
            const id = parseInt(req.params.id, 10);
            if (isNaN(id)) {
              return res.status(400).send("Invalid ID");
            }
            const { name, email, age, dob } = req.body;
            if (!name || !age || !dob || !age) {
              return res.status(400).send("Missing required fields");
            }

             pool.query(getStudentsByIdQuery, [id], (err, result) => {
               if (err) {
                 console.error(err);
                 return res.status(500).send("Server Error");
               }
               if (result.rows.length === 0) {
                 return res.status(404).send("Student not found");
               }
               
               pool.query(
                 updateStudentQuery,
                 [name, id], //, email, age, dob, id
                 (err, result) => {
                   if (err) {
                     console.error(err);
                     return res.status(500).send("Server Error");
                   }
                   res.status(200).json("Student updated successfully.");
                 }
               );
             });

}

module.exports = {
  getStudents,
  getStudentsById,
  addStudent,
  deleteStudent,
  updateStudent,
};