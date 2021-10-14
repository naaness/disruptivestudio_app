require('dotenv').config()

const { api } = require('../helpers/testing')
const apiRequest = require('../helpers/apiRequest')
const STATUS_CODE = require('../constants/statusCode')
const CRYPTOCURRENCY = require('../constants/cryptocurrency')

apiRequest.get = jest.fn(async(query, transform) => {
  return new Promise((resolve) => {
    const json = {
      data: {
        market_data: {
          price_usd: 10
        }
      }
    }
    
    return resolve(transform(json), query)
  })
})

describe('get /api/balances', () => {
  test('Se retorna con formato json', async() => {
    await api
      .get('/api/balances')
      .expect(STATUS_CODE.OK)
      .expect('Content-Type', /application\/json/)
  })
  test('Calcular balance con un monto de 1000 dolares', async() => {
    const response = await api.get('/api/balances?amount=1000')
    expect(response.body).toHaveLength(Object.keys(CRYPTOCURRENCY).length)
    expect(response.body).toEqual([
      {
        "symbol": "BTC",
        "balance": 600,
        "price_usd": 10
      },
      {
        "symbol": "ETH",
        "balance": 504,
        "price_usd": 10
      },
      {
        "symbol": "ADA",
        "balance": 120,
        "price_usd": 10
      }
    ])
  })
})