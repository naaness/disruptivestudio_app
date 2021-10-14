/* eslint camelcase: ["error", {"properties": "never", ignoreDestructuring: true}] */
const balancesRouter = require('express').Router()
const apiExtenal = require('../helpers/apiRequest')
const balance = require('../helpers/balance')
const STATUS_CODE = require('../constants/statusCode')
const CRYPTOCURRENCY = require('../constants/cryptocurrency')

/**
 * Ruta obtener balances
 * 
 * @name Balances - consultar
 * @path {GET} /api/balances
 * @params {String} [amount=0] - Monto en dolares a calcular el balance
 * @response {Array<Object>} balances - Listado de balances
 * @memberof module:Api
 */
balancesRouter.get('/', async (request, response, next) => {
  const { amount=0 } = request.query
  try {
    
    // Una vez se obtenga el valor dolar por crypto divisa obtener el balance anual
    const getBalance = (json, symbol, percentReturn) => {
      if (!json) {
        return json
      }
      return {
        symbol,
        balance: balance.calculate(amount, percentReturn),
        price_usd: json.data.market_data.price_usd
      } 
    }

    // Crear un listado de peticiones
    const resources = Object.keys(CRYPTOCURRENCY).map(crypto => apiExtenal.get(`assets/${crypto.toLowerCase()}/metrics?fields=market_data/price_usd`, (json) => getBalance(json, CRYPTOCURRENCY[crypto].SYMBOL, CRYPTOCURRENCY[crypto].RETURN)))
    
    // Proceso cada petición 
    let newDocs = await Promise.all(resources)

    // Retorno los resultados
    response.status(STATUS_CODE.OK).json(newDocs)
  } catch (error) {
    next(error)
  }
})

module.exports = balancesRouter
