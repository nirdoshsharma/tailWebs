const { StudentDAO } = require("../../dao/student.dao")

const add = async (req, res) => {
    const { body: { name, subject, marks } = {} } = req;
    let student = await StudentDAO.findByNameAndSubject(name, subject);
    if (student) {
        student = await StudentDAO.updateMarks(student._id, marks);
    } else {
        student = await StudentDAO.create(name, subject, marks);
    }
    return res.send({ error: 0, data: student })
}

const edit = async (req, res) => { 
    const { 
        params: { id } = {},
        body: { name, subject, marks } = {} 
    } = req;
    let student = await StudentDAO.findById(id);
    if(!student){
        return res.status(404).send({ error: 1, message: "Student Not Found" })
    }
    student = await StudentDAO.update(id, name, subject, marks);
    return res.send({ error: 0, data: student })
}

const list = async (req, res) => {
    const students = await StudentDAO.list();
    return res.send({
        error: 0,
        data: students,
    })
}

const view = async (req, res) => {
    const { params: { id } } = req;
    const student = await StudentDAO.findById(id);
    return res.send({
        error: 0,
        data: student,
    })
}

const remove = async (req, res) => {
    const { params: { id } } = req;
    await StudentDAO.remove(id)
    return res.send({
        error: 0,
        data: {
            message: "Student Removed"
        },
    })
}

const StudentController = { add, edit, list, view, remove };
module.exports = { StudentController }