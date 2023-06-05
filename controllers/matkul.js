const Course = require('../models/matkul');

// GET all courses
exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET a single course by id
exports.getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// CREATE a new course
exports.createCourse = async (req, res) => {
    const course = new Course({
        kode: req.body.kode,
        nama: req.body.nama,
        sks: req.body.sks,
        kelas: req.body.kelas
    });

    try {
        const newCourse = await course.save();
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// UPDATE an existing course by id
exports.updateCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        course.kode = req.body.kode || course.kode;
        course.nama = req.body.nama || course.nama;
        course.sks = req.body.sks || course.sks;
        course.kelas = req.body.kelas || course.kelas;

        const updatedCourse = await course.save();
        res.status(200).json(updatedCourse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE a course by id
exports.deleteCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
          return res.status(404).json({ message: 'Course not found' });
        }
    
        await Course.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: 'Course deleted' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};