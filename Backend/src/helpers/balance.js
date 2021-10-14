/**
* Obtiene la ganancia por criptomoneda
* @module Helpers/Balance
*/

/**
 * Calcular la ganacia en x cantidad de meses
 * 
 * @param {number} amount Monto a calcular
 * @param {number} percentReturn Porcentaje de retorno po mes
 * @param {number} amount Monto a calcular
 * @returns {number} months Meses a calcular
 */
const calculate = (amount, percentReturn, months=12) => {
  return Number((amount * percentReturn * months).toFixed(2))
}

module.exports = {
  calculate,
}
