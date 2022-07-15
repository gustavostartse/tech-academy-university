const CourseService = require("../services/courseService");

exports.get = async (req, res, next) => {
  try {
    const payload = await new CourseService().getAllCourses();
    res.status(200).send(payload);
  } catch (error) {
    res.status(error.status || 400).send({
      message: error.message,
    });
  }
};

exports.getById = async (req, res, next) => {
  try {
    const payload = await new CourseService().getCourseById(req.params.id);
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
    await new CourseService().createCourse(body);
    const newCourse = await new CourseService().getCourseById(body.code);
    res.status(201).send(newCourse);
  } catch (error) {
    res.status(error.status || 400).send({
      message: error.message,
    });
  }
};

exports.put = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const oldCourse = await new CourseService().getCourseById(id);

    if (!oldCourse || oldCourse.length === 0)
      throw new Error(`Course with ID ${id} was not found.`);

    await new CourseService().updateCourse(id, body);

    const newCourse = await new CourseService().getCourseById(id);

    res.status(200).send(newCourse);
  } catch (error) {
    res.status(error.status || 400).send({
      message: error.message,
    });
  }
};

exports.delete = async (req, res, next) => {
  try {
    const id = req.params.id;
    await new CourseService().deleteCourse(id);
    res.status(204).send();
  } catch (error) {
    res.status(error.status || 400).send({
      message: error.message,
    });
  }
};
