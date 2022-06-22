const express = require("express");
const router = express.Router();

const teacherController = require("../controller/teacher");

router.post("/addTeacher", teacherController.addTeacher);
router.get("/getTeachers", teacherController.getTeachers);
module.exports = router;
