/**
* Obtiene los cambios frente al dolar de cada crypto
* @module Helpers/ApiRequess
*/

require('dotenv').config()
const https = require('https')
const http = require('http')

const { EXTERNAL_API_DEVE, EXTERNAL_API_TEST, EXTERNAL_API_PROD, NODE_ENV, API_KEY } = process.env
const connectionString = NODE_ENV === 'test'
  ? EXTERNAL_API_TEST
  : NODE_ENV === 'development'
    ? EXTERNAL_API_DEVE
    : EXTERNAL_API_PROD

const apiRequest = {
  get(query, transform) {
    return new Promise((resolve) => {
      let objRquest = http
      if (connectionString.indexOf('https') === 0) {
        objRquest = https
      }
      
      const options = {
        headers: {
          'x-messari-api-key': API_KEY
        }
      };
      objRquest.request(
        `${connectionString}/${query}`,
        options,
        (res) => {
          let body = ''
          res.on('data', chunk => {
            body += chunk
          })
          res.on('end', async () => {
            const json = JSON.parse(body)
            if (typeof json.data !== 'undefined') {
              if (typeof transform === 'function') {
                return resolve(transform(json), query)
              }
              return resolve(json, query)
            }
            resolve(null, query)
          })
        }
      ).on('error', (e) => {
        resolve(null, query)
      })
      .end()
    })
  }
}

module.exports = apiRequest
