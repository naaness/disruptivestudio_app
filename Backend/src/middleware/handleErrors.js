/**
 * Administrar los errores de la aplicación
 * 
 * @module Middleware/HandleErrors
 */
const STATUS_CODE = require('../constants/statusCode')

/**
 * Tipo de errores a controlar
 * @type {Object}
 */
const ERROR_HANDLERS = {
  ValidationError: (res, error) =>
    res.status(STATUS_CODE.BAD_REQUEST).send({ error: error.message }),
  MongoError: (res, error) =>
    res.status(STATUS_CODE.BAD_REQUEST).send({ error: error.message }),
  CastError: (res, error) =>
    res.status(STATUS_CODE.BAD_REQUEST).send({ error: error.message }),
  defaultError: (res) => {
    res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).end()
  }
}

/**
 * Dar respuesta al error
 * 
 * @param {Object} error Error generado en la aplicación
 * @param {Object} req Request de la api
 * @param {Object} res Response de la api
 */
module.exports = (error, req, res, next) => {
  const handler = ERROR_HANDLERS[error.name] || ERROR_HANDLERS.defaultError
  handler(res, error)
}
