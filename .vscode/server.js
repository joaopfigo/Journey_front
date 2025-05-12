// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // aponta para o seu db.json
const middlewares = jsonServer.defaults();

// Permite todos os métodos HTTP
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

server.use(middlewares);
server.use(router);

// Inicia o servidor
server.listen(3000, () => {
  console.log('JSON Server rodando na porta 3000 🚀');
});
