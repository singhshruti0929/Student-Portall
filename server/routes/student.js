const express = require("express");
const router = express.Router();

const studentController = require("../controller/student");

router.post("/addStudent", studentController.addStudent);
router.get("/getStudents", studentController.getStudents);
router.post("/getBySubject", studentController.getBySubjects);
router.post("/getByClass", studentController.getByClass);
module.exports = router;
