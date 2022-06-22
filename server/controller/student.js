const student = require("../model/student");
const teacherModel = require("../model/teacher");

exports.addStudent = async (req, res, next) => {
  try {
    const studentData = req.body;
    const Student = await student.create(studentData);
    console.log("Student Added", Student);
    res.json({ Student, status: true });
  } catch (err) {
    console.log(err);
    res.json({ error, status: false });
  }
};

exports.getStudents = async (req, res, next) => {
  try {
    const students = await student.find();
    res.json({ students, status: true });
  } catch {
    res.json({ students: null, status: false });
  }
};

exports.getBySubjects = async (req, res) => {
  console.log(req.body);
  try {
    const subject = await student.aggregate([
      { $match: { subject: req.body.subject } },
      {
        $lookup: {
          from: "teachers",
          localField: "subject",
          foreignField: "subject",
          as: "matchedSubject",
        },
      },
    ]);
    res.json({ matched: subject, status: true });
  } catch {
    res.json({ students: null, status: false });
  }
};

exports.getByClass = async (req, res) => {
  try {
    const Class = await student.aggregate([
      { $match: { class: req.body.class } },
    ]);
    res.json({ classes: Class, status: true });
  } catch {
    res.json({ classes: null, status: false });
  }
};
