require('dotenv').config()
const { app } = require("./app")
const changes = require("./helpers/changes")

const webSocketServer = require('websocket').server;
const http = require('http');
const server = http.createServer(app);

const PORT = process.env.PORT || 4000
server.listen(PORT, async() => {
  console.log(`El servidor esta corriendo en el puerto ${PORT}`)
})
const wsServer = new webSocketServer({
  httpServer: server
});

// I'm maintaining all active connections in this object
const clients = {};

// This code generates unique userid for everyuser.
const getUniqueID = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return s4() + s4() + '-' + s4();
};

var socketEmiter = null
wsServer.on('request', function(request) {
  var userID = getUniqueID();
  console.log((new Date()) + ' Recieved a new connection from origin ' + request.origin + '.');
  // You can rewrite this part of the code to accept only the requests from allowed origin
  const connection = request.accept(null, request.origin);
  clients[userID] = connection;
  console.log('connected: ' + userID + ' in ' + Object.getOwnPropertyNames(clients))
  connection.on('close', function(reasonCode, description) {
    console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
  });
  socketEmiter = connection
});

// Enviar los cambios cada intervalos
let timer = setInterval(() => {
  if (socketEmiter) {
    console.log('Send changes')
    socketEmiter.send(JSON.stringify(changes.calculate()));
  }
}, 2000)

// https://www.pragma.com.co/academia/lecciones/implementacion-de-una-aplicacion-de-mensajeria-utilizando-socket

module.exports = { server, wsServer }
