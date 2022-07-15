const db = require("../index.js");

class CourseRepository {
  async findAll() {
    const conn = await db.connectToMysql();
    const [courses] = await conn.query("SELECT * FROM course");

    return courses;
  }

  async findById(code) {
    const conn = await db.connectToMysql();
    const [course] = await conn.query("SELECT * FROM course WHERE code = ?", [
      code,
    ]);

    return course;
  }

  async create(courseData) {
    const conn = await db.connectToMysql();
    const query = "INSERT INTO course(name) VALUES(?)";
    const [course] = await conn.query(query, [courseData.name]);

    return course;
  }

  async update(code, courseData) {
    const conn = await db.connectToMysql();
    const query = "UPDATE course SET name = ? WHERE code = ?";
    const course = await conn.query(query, [courseData.name, code]);

    return course;
  }

  async delete(code) {
    const conn = await db.connectToMysql();
    const query = "DELETE FROM course WHERE code = ?";
    await conn.query(query, [code]);
  }
}

module.exports = CourseRepository;
