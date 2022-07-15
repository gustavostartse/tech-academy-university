const CourseRepository = require('../database/repositories/courseRepository.js');

class CourseService {
  constructor() {
    this.repository = new CourseRepository();
  }

  async getAllCourses(){
    return this.repository.findAll();
  }

  async getCourseById(id){
    return this.repository.findById(id);
  }

  async createCourse(course){
    return this.repository.create(course);
  }

  async updateCourse(code, course){
    return this.repository.update(code, course);
  }

  async deleteCourse(id){
    return this.repository.delete(id);
  }
};

module.exports = CourseService;
