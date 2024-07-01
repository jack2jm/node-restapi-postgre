const {Router} = require('express');
const { getStudents, getStudentsById, addStudent } = require("./controller");
const router = Router();

// router.get('/', (req, res) => {
//             res.send("using api routes");
// });

router.get('/', getStudents);
router.get("/:id", getStudentsById);
router.post("/", addStudent);

module.exports = router;