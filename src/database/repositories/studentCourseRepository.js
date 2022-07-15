const db = require("../index.js");

class StudentCourseRepository {
  async findAll() {
    const conn = await db.connectToMysql();
    const [studentCourses] = await conn.query("SELECT * FROM student_course");

    return studentCourses;
  }

  async findById(studentCode, courseCode) {
    const conn = await db.connectToMysql();
    const [studentCourse] = await conn.query(
      "SELECT * FROM student_course WHERE student_code = ? AND course_code = ?",
      [studentCode, courseCode]
    );

    return studentCourse;
  }

  async create(studentCourseData) {
    const conn = await db.connectToMysql();
    const query = "INSERT INTO student_course VALUES(?, ?, ?)";
    const [studentCourse] = await conn.query(query, [
      studentCourseData.studentCode,
      studentCourseData.courseCode,
      studentCourseData.enrollmentDate,
    ]);

    return studentCourse;
  }

  async update(studentCode, courseCode, studentCourseData) {
    const conn = await db.connectToMysql();
    const query =
      "UPDATE student_course SET student_code = ?, course_code = ?, enrollment_date = ? WHERE student_code = ? AND course_code = ?";
    const studentCourse = await conn.query(query, [
      studentCourseData.studentCode,
      studentCourseData.courseCode,
      studentCourseData.enrollmentDate,
      studentCode,
      courseCode,
    ]);

    return studentCourse;
  }

  async delete(studentCode, courseCode) {
    const conn = await db.connectToMysql();
    const query =
      "DELETE FROM student_course WHERE student_code = ? AND course_code = ?";
    await conn.query(query, [studentCode, courseCode]);
  }
}

module.exports = StudentCourseRepository;
