let Joi=require("joi");


let product={

    body:Joi.object().keys({
        Name: Joi.string().required(),
        price: Joi.number().positive().required(),
        info: Joi.string().required()
    }),
};

module.exports={product}