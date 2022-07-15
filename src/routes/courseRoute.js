const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController')

router.get('/', courseController.get);
router.get('/:id', courseController.getById);
router.post('/', courseController.post);
router.put('/:id', courseController.put);
router.delete('/:id', courseController.delete);

module.exports = router;