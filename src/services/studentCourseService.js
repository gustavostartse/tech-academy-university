const StudentCourseRepository = require('../database/repositories/studentCourseRepository.js');

class StudentCourseService {
  constructor() {
    this.repository = new StudentCourseRepository();
  }

  async getAllStudentCourses(){
    return this.repository.findAll();
  }

  async getStudentCourseById(studentCode, courseCode){
    return this.repository.findById(studentCode, courseCode);
  }

  async createStudentCourse(studentCourse){
    return this.repository.create(studentCourse);
  }

  async updateStudentCourse(studentCode, courseCode, studentCourse){
    return this.repository.update(studentCode, courseCode, studentCourse);
  }

  async deleteStudentCourse(studentCode, courseCode){
    return this.repository.delete(studentCode, courseCode);
  }
};

module.exports = StudentCourseService;
