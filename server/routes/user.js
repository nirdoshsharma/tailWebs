const express = require('express');
const { UserController } = require('../controllers/user');
const { inputValidator } = require('../middlewares/inputValidtor');
const { LoginSchema } = require('../middlewares/schema/login.schema');

const UserRouter = express.Router();

UserRouter.post("/login", inputValidator(LoginSchema) ,UserController.login)

module.exports = { UserRouter }