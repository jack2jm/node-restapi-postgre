const {Router} = require('express');
const {
  getStudents,
  getStudentsById,
  addStudent,
  deleteStudent,
  updateStudent,
} = require("./controller");
const router = Router();

// router.get('/', (req, res) => {
//             res.send("using api routes");
// });

router.get('/', getStudents);
router.get("/:id", getStudentsById);
router.post("/", addStudent);
router.delete("/:id", deleteStudent);
router.put("/:id", updateStudent);

module.exports = router;