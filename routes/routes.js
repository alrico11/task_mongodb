const express = require('express');
const router = express.Router();

const studentController = require('../controllers/mahasiswa');
const courseController = require('../controllers/matkul');

// Routes for students
router.get('/mahasiswa/', studentController.getAllStudents);
router.get('/mahasiswa/:id/', studentController.getStudentById);
router.post('/mahasiswa/', studentController.createStudent);
router.put('/mahasiswa/:id/', studentController.updateStudent);
router.delete('/mahasiswa/:id/', studentController.deleteStudent);

// Routes for courses
router.get('/matkul/', courseController.getAllCourses);
router.get('/matkul/:id/', courseController.getCourseById);
router.post('/matkul/', courseController.createCourse);
router.put('/matkul/:id/', courseController.updateCourse);
router.delete('/matkul/:id/', courseController.deleteCourse);

module.exports = router;