const Joi = require('joi');

const StudentSchema = Joi.object({
    body: {
        name: Joi.string().required(),
        subject: Joi.string().required(),
        marks: Joi.number().required(),
    }
}).unknown(true);

module.exports = { StudentSchema }