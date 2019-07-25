const Joi = require('@hapi/joi');

//register validation
const registerValidation = (data) => {
    const schema = {
        username: Joi.string().min(6).required(),
        password: Joi.string().min(6).required()
    };

    return Joi.validate(data, schema);
}

//login validation
const loginValidation = (data) => {
    const schema = {
        username: Joi.string().min(6).required(),
        password: Joi.string().min(6).required()
    };

    return Joi.validate(data, schema);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;