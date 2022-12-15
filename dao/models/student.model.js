const mongoose = require('mongoose')
const { Schema } = mongoose;

const studentSchema = new Schema({
    name: { type: String, require: true },
    subject: { type: String, require: true },
    marks: { type: Number, require: true }
}, { timestamps: true });

const StudentModel = mongoose.model('Student', studentSchema);
module.exports = { StudentModel }