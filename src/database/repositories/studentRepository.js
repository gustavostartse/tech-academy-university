const db = require("../index.js");

class StudentRepository {
  async findAll() {
    const conn = await db.connectToMysql();
    const students = await conn.query("SELECT * FROM student");

    return students;
  }

  async findById(code) {
    const conn = await db.connectToMysql();
    const [student] = await conn.query("SELECT * FROM student WHERE code = ?", [
      code,
    ]);

    return student;
  }

  async create(studentData) {
    const conn = await db.connectToMysql();
    const query = "INSERT INTO student(code, name, dob) VALUES(?, ?, ?)";
    const [student] = await conn.query(query, [
      studentData.code,
      studentData.name,
      studentData.dob,
    ]);

    return student;
  }

  async update(code, studentData) {
    const conn = await db.connectToMysql();
    const query = "UPDATE student SET name = ?, dob = ? WHERE code = ?";
    const student = await conn.query(query, [
      studentData.name,
      studentData.dob,
      code,
    ]);

    return student;
  }

  async delete(code) {
    const conn = await db.connectToMysql();
    const query = "DELETE FROM student WHERE code = ?";
    await conn.query(query, [Number(code)]);
  }
}

module.exports = StudentRepository;
