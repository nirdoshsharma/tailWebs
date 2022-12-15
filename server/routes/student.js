const express = require('express');
const { StudentController } = require('../controllers/student');
const { authentication } = require('../middlewares/authentication');
const { inputValidator } = require('../middlewares/inputValidtor');
const { StudentSchema } = require('../middlewares/schema/student.schema');

const StudentRouter = express.Router();

StudentRouter.use(authentication);

StudentRouter.post("/", inputValidator(StudentSchema), StudentController.add)
StudentRouter.get("/:id", StudentController.view)
StudentRouter.get("/", StudentController.list)
StudentRouter.put("/:id", StudentController.edit)
StudentRouter.delete("/:id", StudentController.remove)

module.exports = { StudentRouter }