/**
 * Registrar los errores
 * 
 * @module Middleware/ErrorLogger
 */
const { NODE_ENV } = process.env

/**
 * Registrar el error de la aplicación
 * 
 * @param {Object} error Error generado en la aplicación
 * @param {Object} req Request de la api
 * @param {Object} res Response de la api
 * @param {CallableFunction} next Continuar con el siguiente endpoint
 */
module.exports = (error, req, res, next) => {
  if (NODE_ENV !== 'test') {
    console.error(error)
  }
  next(error)
}