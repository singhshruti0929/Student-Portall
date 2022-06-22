const teacher = require("../model/teacher");

exports.addTeacher = async (req, res, next) => {
  try {
    const teacherData = req.body;
    const Teacher = await teacher.create(teacherData);
    console.log("Teacher Added", teacher);
    res.json({ Teacher, status: true });
  } catch (err) {
    console.log(err);
    res.json({ error, status: false });
  }
};

exports.getTeachers = async (req, res, next) => {
  try {
    const teachers = await teacher.find();
    res.json({ teachers, status: true });
  } catch {
    res.json({ teachers: null, status: false });
  }
};
