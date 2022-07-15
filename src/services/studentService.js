const StudentRepository = require('../database/repositories/studentRepository.js');

class StudentService {
  constructor() {
    this.repository = new StudentRepository();
  }

  async getAllStudents(){
    return this.repository.findAll();
  }

  async getStudentById(id){
    return this.repository.findById(id);
  }

  async createStudent(student){
    return this.repository.create(student);
  }

  async updateStudent(code, student){
    return this.repository.update(code, student);
  }

  async deleteStudent(id){
    return this.repository.delete(id);
  }
};

module.exports = StudentService;
