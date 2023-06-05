const Student = require('../models/mahasiswa');

// GET all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET a single student by id
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE a new student
exports.createStudent = async (req, res) => {
  const student = new Student({
    nama: req.body.nama,
    nim: req.body.nim,
    kelas: req.body.kelas,
    jenisKelamin: req.body.jenisKelamin,
    semester: req.body.semester
  });

  try {
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE an existing student by id
exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    student.nama = req.body.nama || student.nama;
    student.nim = req.body.nim || student.nim;
    student.kelas = req.body.kelas || student.kelas;
    student.jenisKelamin = req.body.jenisKelamin || student.jenisKelamin;
    student.semester = req.body.semester || student.semester;

    const updatedStudent = await student.save();
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE a student by id
exports.deleteStudent = async (req, res) => {
    try {
        const result = await Student.deleteOne({ _id: req.params.id });
        if (result.deletedCount === 0) {
          return res.status(404).json({ message: 'Student not found' });
        }
    
        res.status(200).json({ message: 'Student deleted' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};