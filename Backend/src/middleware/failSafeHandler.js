/**
 * Ultima respuesta de error
 * 
 * @module Middleware/FailSafeHandler
 */
const STATUS_CODE = require('../constants/statusCode')

/**
 * Dar una respuesta de error a la petición
 * 
 * @param {Object} error Error generado en la aplicación
 * @param {Object} req Request de la api
 * @param {Object} res Response de la api
 */
module.exports = (error, req, res) => {
  res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).send(error)
}