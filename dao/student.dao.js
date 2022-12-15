const { StudentModel } = require("./models/student.model");

const list = () => StudentModel.find({});
const findById = (id) => StudentModel.findById(id);
const findByNameAndSubject = (name, subject) => StudentModel.findOne({ name, subject });
const create = (name, subject, marks) => StudentModel.create({ name, subject, marks });
const update = (id, name, subject, marks) => {
    const updateQ = {};
    if (name) updateQ.name = name;
    if (subject) updateQ.subject = subject;
    if (marks) updateQ.marks = marks;
    return StudentModel.findOneAndUpdate({ _id: id }, { $set: updateQ }, { new: true })
}
const updateMarks = (id, marks) => StudentModel.findOneAndUpdate({ _id: id }, { $inc: { marks } }, { new: true })
const remove = (id) => StudentModel.remove({ _id: id })

const StudentDAO = { list, findById, findByNameAndSubject, create, update, updateMarks, remove }
module.exports = { StudentDAO }