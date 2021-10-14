/**
 * Transformar los datos
 * @module Helpers/Testing
 */

const supertest = require('supertest')

const { app } = require('../app')

/**
 * Envuelve la aplicación para poder realizar testing http
 * @type {Object} 
 */
const api = supertest(app)

module.exports = {
  api,
}
