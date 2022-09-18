const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.createCourseView);
router.post('/create', courseController.createCourse);
router.get('/edit/:id', courseController.editCourseView);
router.put('/edit/:id', courseController.editCourse);
router.delete('/delete/:id', courseController.deleteCourse);
router.get('/:slug', courseController.courseDetail);

module.exports = router;
