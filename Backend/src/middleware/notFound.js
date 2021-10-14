/**
 * Respuesta cuando no se encuentra un endpoint
 * 
 * @module Middleware/NotFound
 */
const STATUS_CODE = require('../constants/statusCode')

/**
 * Da respuesta cuando no encuentra el endpoint
 * 
 * @param {Object} req Request de la api
 * @param {Object} res Response de la api
 */
module.exports = (req, res) => {
  res.status(STATUS_CODE.NOT_FOUND).end()
}
