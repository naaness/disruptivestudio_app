/**
 * Endpoins api
 * @module Api
 */

const express = require('express')
const app = express()

const cors = require('cors')
const notFound = require('./middleware/notFound')

const errorLogger = require('./middleware/errorLogger')
const handleErrors = require('./middleware/handleErrors')
const failSafeHandler = require('./middleware/failSafeHandler')

const balancesRouter = require('./controllers/balances')

app.use(cors())
app.use(express.json())

/**
 * Ruta inicial
 * 
 * @name Index
 * @path {GET} /
 */
app.get('/', (_, response) => {
  response.send('<body><div style="width: 100%; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; background-color: 383A3F;"><h1 style="color: #ffffff; font-family: Poppins,Arial,sans-serif;  font-weight: 600;">Disruptive Studio Server</h1><img width="130" height="42" src="https://disruptivestudio.com/images/body/logo.svg" alt="disruptivestudio"><div></body>')
})

app.use('/api/balances', balancesRouter)

app.use(notFound)
app.use(errorLogger)
app.use(handleErrors)
app.use(failSafeHandler)

module.exports = { app }
