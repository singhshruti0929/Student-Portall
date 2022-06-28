const express = require("express");
const router = express.Router();

const teacherController = require("../controller/teacher");

router.post("/addTeacher", teacherController.addTeacher);
router.get("/getTeachers", teacherController.getTeachers);
router.post("/getTeacher", teacherController.getTeacher);
router.post("/editTeacher/:id", teacherController.editTeacher);
router.post("/softDeleteTeacher/:id", teacherController.softDeleteTeacher);

module.exports = router;
