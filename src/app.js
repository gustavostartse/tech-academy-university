const express = require('express');
const app = express();

//Rotas
const index = require('./routes/index');
const studentRoute = require('./routes/studentRoute');
const courseRoute = require('./routes/courseRoute');
const studentCourseRoute = require('./routes/studentCourseRoute');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', index);
app.use('/student', studentRoute);
app.use('/course', courseRoute);
app.use('/student-course', studentCourseRoute);

module.exports = app;