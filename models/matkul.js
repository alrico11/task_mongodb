const mongoose = require('mongoose');

const matkulSchema = new mongoose.Schema({
  kode: {
    type: String,
    required: true
  },
  nama: {
    type: String,
    required: true
  },
  sks: {
    type: Number,
    required: true
  },
  kelas: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('matkul', matkulSchema);