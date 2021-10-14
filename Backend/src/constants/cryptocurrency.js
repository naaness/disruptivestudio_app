/**
 * Constantes para las criptomonedas
 * @module Constants/cryptocurrency
 */

/**
 * Retorno de inversión y simbolo según la criptomoneda
 * 
 * @constant
 * @property {Object} BITCOIN - Tasa de retorno y su simbolo del Bitcoin
 * @property {Object} ETHER - Tasa de retorno y su simbolo del Ethereum
 * @property {Object} CARDANO - Tasa de retorno y su simbolo de Cardano
 */
module.exports = {
  BITCOIN: {
    RETURN: 0.05,
    SYMBOL: 'BTC'
  },
  ETHEREUM: {
    RETURN: 0.042,
    SYMBOL: 'ETH'
  },
  CARDANO: {
    RETURN: 0.01,
    SYMBOL: 'ADA'
  },
}
