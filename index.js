//imported json-serer and stored in jsonServer 
const jsonServer = require('json-server')

//create server using json-server library
const mediaPlayerServer = jsonServer.create()

//create path to db.json file
const router = jsonServer.router('db.json')

//middlewares to convert js to json
const middleWare = jsonServer.defaults()

//connect/use middleware and router in server
mediaPlayerServer.use(middleWare);
mediaPlayerServer.use(router)

//setup port for the server
const port = 5000 || process.env.PORT

//to listen server for resolving request
mediaPlayerServer.listen(port,()=> console.log( `server running on ${port}`) )