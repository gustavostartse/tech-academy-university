const express = require('express');
const router = express.Router();
const studentCourseController = require('../controllers/studentCourseController')

router.get('/', studentCourseController.get);
router.post('/', studentCourseController.post);
router.put('/:studentCode/:courseCode', studentCourseController.put);
router.delete('/:studentCode/:courseCode', studentCourseController.delete);

module.exports = router;