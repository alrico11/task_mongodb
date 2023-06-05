const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    nim: {
        type: String,
        required: true,
        unique: true
    },
    kelas: {
        type: String,
        required: true
    },
    jenisKelamin: {
        type: String,
        enum: ['Laki-laki', 'Perempuan'],
        required: true
    },
    semester: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Student', studentSchema);