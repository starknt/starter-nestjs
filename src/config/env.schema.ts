import * as Joi from 'joi'

export const envSchema = Joi.object({
    NODE_ENV: Joi.string().valid(['development', 'production', 'test']).default('development'),
    PORT: Joi.number().default(3000),
    HOST: Joi.string().hostname().default('localhost'),

    MAIL_HOST: Joi.string().hostname().required(),
    MAIL_PORT: Joi.number().required(),
    MAIL_USER: Joi.string().email().required(),
    MAIL_PASS: Joi.string().required(),

    REDIS_HOST: Joi.string().hostname().default('127.0.0.1'),
    REDIS_PORT: Joi.number().default(6379),
    REDIS_PASSWORD: Joi.string().empty('').default(''),
    REDIS_DB: Joi.number().default(0),

    JWT_SECRET: Joi.string().empty().default(''),
    JWT_EXPIRE: Joi.string().default('30d')
})