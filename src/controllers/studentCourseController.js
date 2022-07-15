const StudentCourseService = require("../services/studentCourseService");

exports.get = async (req, res, next) => {
  try {
    const payload = await new StudentCourseService().getAllStudentCourses();
    res.status(200).send(payload);
  } catch (error) {
    res.status(error.status || 400).send({
      message: error.message,
    });
  }
};

exports.post = async (req, res, next) => {
  try {
    const body = req.body;
    await new StudentCourseService().createStudentCourse(body);
    const newStudentCourse =
      await new StudentCourseService().getStudentCourseById(
        body.studentCode,
        body.courseCode
      );
    res.status(201).send(newStudentCourse);
  } catch (error) {
    res.status(error.status || 400).send({
      message: error.message,
    });
  }
};

exports.put = async (req, res, next) => {
  try {
    const studentCode = req.params.studentCode;
    const courseCode = req.params.courseCode;
    const body = req.body;

    const oldStudentCourse =
      await new StudentCourseService().getStudentCourseById(
        studentCode,
        courseCode
      );

    if (!oldStudentCourse || oldStudentCourse.length === 0)
      throw new Error(`StudentCourse was not found.`);

    await new StudentCourseService().updateStudentCourse(
      studentCode,
      courseCode,
      body
    );

    const newStudentCourse =
      await new StudentCourseService().getStudentCourseById(
        body.studentCode,
        body.courseCode
      );

    res.status(200).send(newStudentCourse);
  } catch (error) {
    res.status(error.status || 400).send({
      message: error.message,
    });
  }
};

exports.delete = async (req, res, next) => {
  try {
    const studentCode = req.params.studentCode;
    const courseCode = req.params.courseCode;
    await new StudentCourseService().deleteStudentCourse(
      studentCode,
      courseCode
    );
    res.status(204).send();
  } catch (error) {
    res.status(error.status || 400).send({
      message: error.message,
    });
  }
};
