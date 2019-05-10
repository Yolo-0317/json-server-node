const jsonServer = require('json-server');
const db = require('./db.js')();
const serverPort = 4000;

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

const allRoutesKey = Object.keys(db);
console.log('objectdsfe ----');

server.use(middlewares);
server.use(router);
server.listen(serverPort, () => {
  console.log(`------JSON Server is running: ${serverPort}-------\n`);
  allRoutesKey.forEach((key) => {
    console.log(`http://localhost:${serverPort}/${key} \n`);
  });
});
