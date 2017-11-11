const httpServer = require('http-server');

const root = './src/';
const server = httpServer.createServer({root});

server.listen(3000);
