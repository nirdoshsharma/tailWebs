const Joi = require('joi');

const LoginSchema = Joi.object({
    body: {
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    }
}).unknown(true);

module.exports = { LoginSchema }