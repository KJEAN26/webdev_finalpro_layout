const Joi = require('joi');

const LoginSchema = Joi.object({
    firstName : Joi.string().required().min(3).max(15),
    lastName: Joi.string.required().min(3).max(10),
    email: Joi.string().required().min().max(),
    password: Joi.string().required().min().max()
})

module.exports = LoginSchema;