// Helpers
const balance = require('../helpers/balance')

// Constants
const CRYPTOCURRENCY = require('../constants/cryptocurrency')

describe('Calculo de balance', () => {
  test('Monto ganancia anual para Bitcoin', () => {
    // Arrange
    const amount = 100
    const percentReturn = CRYPTOCURRENCY.BITCOIN.RETURN
    const expected = 60

    // Act
    const returnAmount = balance.calculate(amount, percentReturn)

    // Asset
    expect(returnAmount).toEqual(expected)
  })
  test('Monto ganancia anual para Ether', () => {
    // Arrange
    const amount = 100
    const percentReturn = CRYPTOCURRENCY.ETHEREUM.RETURN
    const expected = 50.40

    // Act
    const returnAmount = balance.calculate(amount, percentReturn)

    // Asset
    expect(returnAmount).toEqual(expected)
  })
  test('Monto ganancia anual para Cardano', () => {
    // Arrange
    const amount = 100
    const percentReturn = CRYPTOCURRENCY.CARDANO.RETURN
    const expected = 12.00

    // Act
    const returnAmount = balance.calculate(amount, percentReturn)

    // Asset
    expect(returnAmount).toEqual(expected)
  })
})
