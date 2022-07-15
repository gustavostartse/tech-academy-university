const StudentService = require("../services/studentService");

exports.get = async (req, res, next) => {
  try {
    const payload = await new StudentService().getAllStudents();
    res.status(200).send(payload);
  } catch (error) {
    res.status(error.status || 400).send({
      message: error.message,
    });
  }
};

exports.getById = async (req, res, next) => {
  try {
    const payload = await new StudentService().getStudentById(req.params.id);
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
    await new StudentService().createStudent(body);
    const newStudent = await new StudentService().getStudentById(body.code);
    res.status(201).send(newStudent);
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

    const oldStudent = await new StudentService().getStudentById(id);

    if (!oldStudent || oldStudent.length === 0)
      throw new Error(`Student with ID ${id} was not found.`);

    await new StudentService().updateStudent(id, body);

    const newStudent = await new StudentService().getStudentById(id);

    res.status(200).send(newStudent);
  } catch (error) {
    res.status(error.status || 400).send({
      message: error.message,
    });
  }
};

exports.delete = async (req, res, next) => {
  try {
    const id = req.params.id;
    await new StudentService().deleteStudent(id);
    res.status(204).send();
  } catch (error) {
    res.status(error.status || 400).send({
      message: error.message,
    });
  }
};
