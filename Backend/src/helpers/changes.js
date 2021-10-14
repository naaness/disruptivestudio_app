/**
* Obtiene los cambios frente al dolar de cada criptomoneda
* @module Helpers/Changes
*/

// Constants
const CRYPTOCURRENCY = require('../constants/cryptocurrency') 

/**
 * Calcular el cambio pora cada criptomoneda
 * 
 * @returns {array} listado de cambios por criptomoneda
 */
 const calculate = () => {
  const min = -0.05
  const max = 0.05
  const getChange = () => Math.random() * (max - min) + min
  return Object.keys(CRYPTOCURRENCY).map( crypto => {
    return { symbol: CRYPTOCURRENCY[crypto].SYMBOL, change: Number(getChange().toFixed(2)) }
  })
}

module.exports = {
  calculate,
}
