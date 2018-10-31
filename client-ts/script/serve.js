const process = require('process');

require('dotenv/config');

const LocalWebServer = require('local-web-server');
const localWebServer = new LocalWebServer();

const appDirectory = 'dist/';
const indexHTML = 'index.html';
const server = localWebServer.listen({
  port: 4128,
  hostname: 'localhost',
  https: true,
  directory: appDirectory,
  key: process.env.https_key,
  cert: process.env.https_cert,
  spa: indexHTML,
});
server.addListener('listening', () => {
  const { address, port } = server.address();
  console.log(`Serving ${appDirectory}/${indexHTML} at https://${address}:${port}`);
});
