# Disruptive Studio App

## Estructura del proyecto

```
+Backend
|_+ requests        # Para hacer peticiones usando la extensión REST Client
  |_ *.rest
|_+ src
  |_+ constants
    |_ *.js             # Constantes a usar en el sistema
  |_+ controllers
    |_ balances.js      # Endpoints para obtener los balances
  |_+ helpers
    |_ apiRequest.js        # Consultar api externas
    |_ balance.js           # Calcular el balance segun el monto
    |_ changes.js           # Simular cambios de dolar
    |_ testing.js           # Conjunto de funciones para ayudar en el testing
  |_+ middleware
    |_ errorLogger.js       # Generar log de errores
    |_ failSafeHandler.js   # Cuando no existe otra forma de controlar el error
    |_ handleErrors.js      # Principal funcion para controlar los errores
    |_ notFound.js          # Cuando no se encuentra ningun endpoint
  |_+ tests         # Archivos para testear el api rest
    |_ *.test.js
  |_ app.js         # Principal archivo para contruir la aplicación
  |_ server.js      # Archivo para configurar el servidor
|_ .env                 # Variables de entorno ( usted deberia crear este archivo )
|_ package.json
|_ pm2.json             # Configuración PM2
+Backend
|_+ api
    |_ balances.js      # Request para obtener el balance
  |_+ components
    |_ CardCrypto       # Mosntrar balance por criptomoneda
    |_ FormBalance      # Formulario para obtener el balance por monto
    |_ Header           # Encabezado de la pagina
    |_ TableCrypto      # Tabla para visualizar las criptomonedas y su actualización en tiempo real
  |_+ constants
    |_ *.js             # Constantes a usar en el frontend
  |_+ helpers
    |_ socket.js        # Me permite configurar el servicio de websocket
  |_+ layouts
    |_ BasicLayout      # Principal layaout del sistema
  |_+ pages
    |_ _app.js          # Punto inicial para la app en next js
    |_ index.js         # Vista home del frontend
  |_+ public            # Archivos públicos
  |_+ sass              # Archivos de estiso sass
|_ Readme.md
```

## Prerequisitos

- nodejs
- pm2

## Instalacción backend

Ir a la carpeta Backend e instalar los archivos

```
cs Backend
yarn install
```

## Archivo .Env

Es necesario crear un archivo llamado .env en el se registraran los variables de entorno, puede usar los siguientes valores como ejemplo

```
PORT=4000
EXTERNAL_API_DEVE=https://data.messari.io/api/v1
EXTERNAL_API_TEST=undefined
EXTERNAL_API_PROD=https://data.messari.io/api/v1
API_KEY=<<your private key messari>>
```

## Levantar servidor en entorno local

Ejecute el siguiente comando

```
yarn start:dev
```

En el caso que desee terminar el servidor puede ejecutar el siguiente comando

```
yarn stop
```

## Instalacción frontend

Ir a la carpeta Frontend e instalar los archivos

```
cs Frontend
yarn install
```

## Levantar servidor web en entorno local

Ejecute el siguiente comando

```
yarn dev
```


## Testing en Backend

Puede correr todos los test del backend recuerdo estar en la carpeta del backend

```
cd Backend
yarn test
```
